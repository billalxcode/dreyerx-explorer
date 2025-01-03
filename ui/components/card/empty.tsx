import React from 'react';

export default function CardEmptyData(props: {
    className?: string;
}) {
    return (
        <div className={`flex flex-col w-full h-full justify-center items-center ${props.className}`}>
            <p>No Data</p>
        </div>
    );
}
