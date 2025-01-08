"use client"
import useAddressTransactions from '@/hooks/address/useAddressTransactions';
import Card from '@/ui/components/card/card';
import Link from 'next/link';
import React, { useEffect } from 'react';
import TransactionItem from '../transactions/item';
import { motion } from 'motion/react';

export default function AddressTransactions(props: {
    address: string;
}) {
    const { address } = props;
    const { addressTransactions, handleFetchTransactions } = useAddressTransactions(address);

    useEffect(() => {
        handleFetchTransactions();
    }, [
        handleFetchTransactions
    ])

    return (
        <Card
            title="Transactions"
            className="w-full"
            toolbar={
                <Link href={'/txs'}>
                    <h3 className="text-sm font-semibold">Next</h3>
                </Link>
            }
        >
            <div className="flex flex-col gap-2 mt-2">
                {
                    addressTransactions.map((transaction, index) => {
                        if (index == 0) {
                            return (
                                <motion.div
                                    key={transaction.hash}
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <TransactionItem
                                        transaction={transaction}
                                    />
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
})
                }
            </div>
        </Card>
    );
}
