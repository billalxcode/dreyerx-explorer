'use client';
import useBlockTransactions from '@/hooks/blocks/useBlockTransactions';
import Card from '@/ui/components/card/card';
import React, { useEffect } from 'react';
import TransactionItem from '../../transactions/item';
import CardEmptyData from '@/ui/components/card/empty';

export default function BlockDetailsTransactions(props: { block: string }) {
    const { handleFetchBlockTransactions, transactions } = useBlockTransactions(
        props.block,
    );

    useEffect(() => {
        handleFetchBlockTransactions();
    }, [handleFetchBlockTransactions]);
    return (
        <Card title="Transactions" className="w-full">
            <div
                className={`flex flex-col gap-2 mt-2 w-full h-full ${transactions.length === 0 ? 'min-h-64' : 'h-full'} justify-center`}
            >
                {transactions.length === 0 ? (
                    <CardEmptyData />
                ) : (
                    transactions?.map((transaction) => {
                        return (
                            <TransactionItem
                                transaction={transaction}
                                key={transaction.hash}
                            />
                        );
                    })
                )}
            </div>
        </Card>
    );
}
