import React from 'react';

export default function BlockItem(props: {
    title: string,
    value: string,
}) {
    return (
        <div className="flex flex-col lg:flex-row gap-1 lg:gap-5">
            <div className="font-semibold w-full lg:w-1/4">{ props.title }</div>
            <div>{props.value}</div>
        </div>
    );
}
