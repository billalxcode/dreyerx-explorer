'use client';
import useTransactionDetails from '@/hooks/transactions/useTransactionDetails';
import Card from '@/ui/components/card/card';
import SkeletonCard from '@/ui/components/skeleton/card';
import { formatDistance } from 'date-fns';
import React, { useEffect } from 'react';
import TransactionItem from './item';
import TransactionDetailsData from './data';
import { weiToEther } from '@/utils/number';

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
                        <div className="flex flex-col gap-4">
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
                                    <p className="pl-5 text-white/50">
                                        {transactionDetails?.timestamp}
                                    </p>
                                </div>
                            </TransactionItem>
                            <TransactionItem
                                title="Block"
                                value={
                                    transactionDetails?.block.toString() ?? '0'
                                }
                            />
                            <TransactionItem title="Status">
                                {
                                    transactionDetails?.status === 'ok' ? (
                                        <p className="text-green-500">Success</p>
                                    ) : (
                                        <p className="text-red-500">Failed with { transactionDetails?.revert_reason }</p>
                                    )
                                }
                            </TransactionItem>
                            <TransactionItem
                                title="From"
                                value={transactionDetails?.from.ens_domain_name ?? transactionDetails?.from.hash}
                                valueClassName="font-semibold"
                                href={`/address/${transactionDetails?.from.hash}`}
                                isCopiable
                            />
                            <TransactionItem
                                title="To"
                                value={
                                    transactionDetails?.to.ens_domain_name ?? (
                                        transactionDetails?.to.is_contract && transactionDetails.to.is_verified ? (
                                            transactionDetails?.to.name
                                        ) : transactionDetails?.to.hash
                                    )}
                                valueClassName="font-semibold"
                                href={`/addres/${transactionDetails?.to.hash}`}
                                isCopiable
                            />
                        </div>
                        <div className="flex flex-col gap-4 py-4">
                            <TransactionItem
                                title="Value"
                            >
                                <div className="flex gap-2 items-center">
                                    <p>{weiToEther(transactionDetails?.value ?? "0")}</p>
                                    <div className="text-white/50 text-sm">DRX</div>
                                </div>
                                </TransactionItem>
                            <TransactionItem
                                title="Gas Used"
                                value={transactionDetails?.gas_used}
                            />
                            <TransactionItem
                                title="Gas Limit"
                                value={transactionDetails?.gas_limit.toString()}
                            />
                            <TransactionItem
                                title="Base fee per gas"
                                value={transactionDetails?.base_fee_per_gas}
                            />
                        </div>
                        <div className="flex flex-col gap-4 py-4">
                            <TransactionItem
                                title="Nonce"
                                value={transactionDetails?.nonce.toString() ?? "0"}
                            />
                        </div>
                        {
                            transactionDetails?.decoded_input !== null ? (
                                <TransactionDetailsData transaction={transactionDetails} />
                            ) : null
                        }
                    </div>
                </Card>
            )}
        </Card>
    );
}
