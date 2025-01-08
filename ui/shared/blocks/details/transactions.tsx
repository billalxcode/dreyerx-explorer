'use client';
import useBlockTransactions, {
    Transaction,
} from '@/hooks/blocks/useBlockTransactions';
import Card from '@/ui/components/card/card';
import React, { useEffect, useState } from 'react';
import TransactionItem from '../../transactions/item';
import CardEmptyData from '@/ui/components/card/empty';

export default function BlockDetailsTransactions(props: { block: string }) {
    const [isEmpty, setIsEmpty] = useState(false);
    const [hasMessage, setHasMessage] = useState(false);
    const { handleFetchBlockTransactions, transactions } = useBlockTransactions(
        props.block,
    );

    useEffect(() => {
        if (!isEmpty && !hasMessage) {
            handleFetchBlockTransactions();
        }
        const transactionIsEmpty =
            Array.isArray(transactions) && transactions.length === 0;
        const transactionHasMessage =
            !Array.isArray(transactions) && !!transactions?.message;

        setIsEmpty(transactionIsEmpty);
        setHasMessage(transactionHasMessage ?? false);
    }, [handleFetchBlockTransactions, transactions, isEmpty, hasMessage]);

    return (
        <Card title="Transactions" className="w-full">
            <div
                className={`flex flex-col gap-2 mt-2 w-full ${isEmpty || hasMessage ? 'min-h-64' : 'h-full'} justify-center`}
            >
                {hasMessage || isEmpty ? (
                    <CardEmptyData message="Transaction not found" />
                ) : (
                    (Array.isArray(transactions) ? transactions : []).map(
                        (transaction: Transaction) => {
                            return (
                                <TransactionItem
                                    transaction={transaction}
                                    key={transaction.hash}
                                />
                            );
                        },
                    )
                )}
            </div>
        </Card>
    );
}
