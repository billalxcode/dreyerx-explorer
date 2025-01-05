'use client';
import useBlockDetails from '@/hooks/blocks/useBlockDetails';
import Card from '@/ui/components/card/card';
import SkeletonCard from '@/ui/components/skeleton/card';
import { shortenString } from '@/utils/strings';
import { formatDistance } from 'date-fns';
import React, { useEffect } from 'react';
import BlockItem from './item';

export default function BlockDetails(props: { block: string }) {
    const { handleFetchBlockDetails, blockDetails, isLoading } =
        useBlockDetails(props.block);
    useEffect(() => {
        console.log(blockDetails);
        handleFetchBlockDetails();
    }, [blockDetails, handleFetchBlockDetails]);
    return (
        <Card title="Block Details" className="w-full">
            {isLoading ? (
                <SkeletonCard />
            ) : (
                <Card className="mt-2">
                    <div className="flex flex-col gap-4 divide-y divide-border-normal">
                        <div className="flex flex-col gap-2">
                            <BlockItem title="Block Hash" value={props.block} />
                            <BlockItem title="Timestamp" value={formatDistance(blockDetails?.timestamp ?? Date.now(), Date.now())} />
                            <BlockItem title="Size" value={blockDetails?.size.toString() ?? "0"} />
                            <BlockItem title="Tx Count" value={blockDetails?.transaction_count.toString() ?? "0"} />
                            <BlockItem title="Validated By" value={shortenString(blockDetails?.miner.hash ?? '', 5)} />
                        </div>
                        <div className="flex flex-col gap-2 py-4">
                            <BlockItem title="Gas Used" value={blockDetails?.gas_used.toString() ?? "0"} />
                            <BlockItem title="Gas Limit" value={blockDetails?.gas_limit.toString() ?? "0"} />
                            <BlockItem title="Base fee per gas" value={blockDetails?.base_fee_per_gas.toString() ?? "0"} />
                        </div>
                    </div>
                </Card>
            )}
        </Card>
    );
}
