import { Block } from '@/hooks/main/blocks';
import Card from '@/ui/components/card/card';
import { shortenString } from '@/utils/strings';
import { formatDistance } from 'date-fns';
import React from 'react';

export default function BlocksItem(props: { block: Block }) {
    return (
        <Card
            title={`#${props.block.height.toString()}`}
            href={`/block/${props.block.height}`}
            className="cursor-pointer hover:border-border-hover"
            toolbar={
                <h4 className="text-sm font-semibold">
                    {formatDistance(props.block.timestamp, Date.now())}
                </h4>
            }
        >
            <div className="flex flex-col gap-1 mt-2">
                <div className="flex justify-between items-center">
                    <h3 className="text-sm font-semibold">Validator: </h3>
                    <p className="text-xs text-text-primary font-semibold">
                        {shortenString(props.block.miner.hash, 5)}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <h3 className="text-sm font-semibold">Tx Count: </h3>
                    <p className="text-xs">{props.block.tx_count}</p>
                </div>
            </div>
        </Card>
    );
}
