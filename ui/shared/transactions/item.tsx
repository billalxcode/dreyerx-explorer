import { Transaction } from '@/hooks/main/useMainTransactions';
import Card from '@/ui/components/card/card';
import { weiToEther } from '@/utils/number';
import { shortenString } from '@/utils/strings';
import { formatDistance } from 'date-fns';
import Link from 'next/link';
import React from 'react';

export default function TransactionItem(props: { transaction: Transaction }) {
    return (
        <Card
            title={`${shortenString(props.transaction.hash, 7)}`}
            href={`/tx/${props.transaction.hash}`}
            className="cursor-pointer hover:border-border-hover"
            toolbar={
                <h4 className="text-sm font-semibold">
                    {formatDistance(props.transaction.timestamp, Date.now())}
                </h4>
            }
        >
            <div className="flex flex-col gap-2 mt-2 lg:mt-0">
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 justify-between">
                    <div className="flex gap-2">
                        <h4 className="text-sm font-semibold">From:</h4>
                        <Link
                            href={`/address/${props.transaction.from.hash}`}
                            className="text-sm text-text-primary font-semibold"
                        >
                            {shortenString(props.transaction.from.hash, 10)}
                        </Link>
                    </div>
                    <div className="flex gap-2 justify-self-start mr-auto">
                        <h4 className="text-sm font-semibold">To:</h4>
                        <p className="text-sm text-text-primary font-semibold">
                            {props.transaction.tx_types && props.transaction.tx_types.includes(
                                'contract_creation',
                            )
                                ? 'Contract Creation'
                                : shortenString(props.transaction.to.hash, 10)}
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-start gap-2 bg-container-default px-4 p-1 rounded-full">
                        <h4 className="text-sm font-semibold">Value:</h4>
                        <p className="text-sm text-text-primary font-semibold">
                            {weiToEther(props.transaction.value ?? '0')} DRX
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    );
}
