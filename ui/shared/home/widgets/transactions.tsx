"use client"
import useMainTransactions from '@/hooks/main/useMainTransactions';
import Card from '@/ui/components/card/card';
import { motion } from 'motion/react';
import React, { useEffect, useRef } from 'react';
import TransactionItem from '../../transactions/item';
import Link from 'next/link';

export default function LatestTransactions() {
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const { transactions, handleFetchTransactions } = useMainTransactions();

    useEffect(() => {
        handleFetchTransactions();

        timerRef.current = setInterval(() => {
            handleFetchTransactions();
        }, 5_000);

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [handleFetchTransactions]);

    return (
        <Card
            title="Latest Transactions"
            className="w-full"
            toolbar={
                <Link href={'/txs'}>
                    <h3 className="text-sm font-semibold">View More</h3>
                </Link>
            }
        >
            <div className="flex flex-col gap-2 mt-2">
                {transactions?.map((transaction, index) => {
                    if (index == 0) {
                        return (
                            <motion.div
                                key={transaction.hash}
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <TransactionItem transaction={transaction} />
                            </motion.div>
                        );
                    } else {
                        return (
                            <TransactionItem
                                transaction={transaction}
                                key={transaction.hash}
                            />
                        );
                    }
                })}
            </div>
        </Card>
    );
}
