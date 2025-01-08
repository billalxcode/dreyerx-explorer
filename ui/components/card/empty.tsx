import React from 'react';

export default function CardEmptyData(props: {
    className?: string;
    message?: string;
}) {
    return (
        <div
            className={`flex flex-col w-full h-full justify-center items-center ${props.className}`}
        >
            <p>{props.message ?? 'No Data'}</p>
        </div>
    );
}
