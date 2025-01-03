'use client';
import useTransactionDetails from '@/hooks/transactions/useTransactionDetails';
import Card from '@/ui/components/card/card';
import SkeletonCard from '@/ui/components/skeleton/card';
import { formatDistance } from 'date-fns';
import React, { useEffect } from 'react';
import TransactionItem from './item';

export default function TransactionDetailsContainer(props: {
    transaction: string;
}) {
    const { handleFetchTransactionDetails, transactionDetails, isLoading } =
        useTransactionDetails(props.transaction);

    useEffect(() => {
        handleFetchTransactionDetails();
    }, [handleFetchTransactionDetails]);
    return (
        <Card title="Transaction Details">
            {isLoading ? (
                <SkeletonCard className="mt-2" />
            ) : (
                <Card className="mt-2">
                    <div className="flex flex-col gap-4 divide-y divide-border-normal">
                        <div className="flex flex-col gap-2">
                            <TransactionItem
                                title="Transaction Hash"
                                value={transactionDetails?.hash ?? ''}
                                isCopiable
                            />
                            <TransactionItem title="Timestamp">
                                <div className="flex gap-5 divide-x divide-border-hover">
                                    <p>
                                        {formatDistance(
                                            transactionDetails?.timestamp ??
                                                Date.now(),
                                            Date.now(),
                                        )}
                                    </p>
                                    <p className='pl-5 text-white/50'>
                                        { transactionDetails?.timestamp }
                                    </p>
                                </div>
                            </TransactionItem>
                            <div className="flex gap-5">
                                <div className="font-semibold w-1/4">
                                    Status
                                </div>
                                <div>{transactionDetails?.status}</div>
                            </div>
                            <div className="flex gap-5">
                                <div className="font-semibold w-1/4">From</div>
                                <div>{transactionDetails?.from.hash}</div>
                            </div>
                            <div className="flex gap-5">
                                <div className="font-semibold w-1/4">To</div>
                                <div>{transactionDetails?.to.hash}</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 py-4">
                            <div className="flex gap-5">
                                <div className="font-semibold w-1/4">Value</div>
                                <div>{transactionDetails?.value} DRX</div>
                            </div>
                            <div className="flex gap-5">
                                <div className="font-semibold w-1/4">
                                    Gas Used
                                </div>
                                <div>{transactionDetails?.gas_used}</div>
                            </div>
                            <div className="flex gap-5">
                                <div className="font-semibold w-1/4">
                                    Gas Limit
                                </div>
                                <div>{transactionDetails?.gas_limit}</div>
                            </div>
                            <div className="flex gap-5">
                                <div className="font-semibold w-1/4">
                                    Base fee per gas
                                </div>
                                <div>
                                    {transactionDetails?.base_fee_per_gas}
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            )}
        </Card>
    );
}
