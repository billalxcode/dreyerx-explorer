'use client';
import useBlockDetails from '@/hooks/blocks/useBlockDetails';
import Card from '@/ui/components/card/card';
import SkeletonCard from '@/ui/components/skeleton/card';
import { shortenString } from '@/utils/strings';
import { formatDistance } from 'date-fns';
import React, { useEffect } from 'react';

export default function BlockDetails(props: { block: string }) {
    const { handleFetchBlockDetails, blockDetails, isLoading } =
        useBlockDetails(props.block);
    useEffect(() => {
        console.log(blockDetails)
        handleFetchBlockDetails();   
    }, [
        blockDetails,
        handleFetchBlockDetails,
    ])
    return (
        <Card title="Block Details" className="w-full">
            {isLoading ? (
                <SkeletonCard />
            ) : (
                <Card className="mt-2">
                    <div className="flex flex-col gap-4 divide-y divide-border-normal">
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-5">
                                <div className="font-semibold w-1/4">
                                    Height
                                </div>
                                <div>{blockDetails?.height}</div>
                            </div>
                            <div className="flex gap-5">
                                <div className="font-semibold w-1/4">
                                    Timestamp
                                </div>
                                <div>
                                    {formatDistance(
                                        blockDetails?.timestamp ?? Date.now(),
                                        Date.now(),
                                    )}
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="font-semibold w-1/4">Size</div>
                                <div>{blockDetails?.size}</div>
                            </div>
                            <div className="flex gap-5">
                                <div className="font-semibold w-1/4">
                                    Tx Count
                                </div>
                                <div>{blockDetails?.transaction_count}</div>
                            </div>
                            <div className="flex gap-5">
                                <div className="font-semibold w-1/4">
                                    Validated By
                                </div>
                                <div>
                                    {shortenString(
                                        blockDetails?.miner.hash ?? '',
                                        5,
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 py-4">
                            <div className="flex gap-5">
                                <div className="font-semibold w-1/4">
                                    Gas Used
                                </div>
                                <div>{blockDetails?.gas_used}</div>
                            </div>
                            <div className="flex gap-5">
                                <div className="font-semibold w-1/4">
                                    Gas Limit
                                </div>
                                <div>{blockDetails?.gas_limit}</div>
                            </div>
                            <div className="flex gap-5">
                                <div className="font-semibold w-1/4">
                                    Base fee per gas
                                </div>
                                <div>{blockDetails?.base_fee_per_gas}</div>
                            </div>
                        </div>
                    </div>
                </Card>
            )}
        </Card>
    );
}
