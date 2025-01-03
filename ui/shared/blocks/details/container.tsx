import React from 'react';
import BlockDetails from './details';
import BlockDetailsTransactions from './transactions';

export default function BlockDetailsContainer(props: {
    block: string;
}) {
    return (
        <div className="flex flex-row gap-2 w-full">
            <BlockDetails block={props.block} />
            <BlockDetailsTransactions  block={props.block} />
        </div>
    );
}
