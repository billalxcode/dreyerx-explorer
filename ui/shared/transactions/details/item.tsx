import React, { ReactNode, useCallback } from 'react';
import { FaCopy } from 'react-icons/fa6';

export default function TransactionItem(props: {
    title: string;
    value?: string;
    isCopiable?: boolean;
    children?: ReactNode;
}) {
    const copyToClipboard = useCallback(() => {
        navigator.clipboard.writeText(props.value ?? "");
    }, [props.value]);

    return (
        <div className="flex gap-5">
            <div className="font-semibold w-1/4">{props.title}</div>
            {props.children ?? (
                <div className="flex gap-2">
                    <p>{props.value}</p>
                    {props.isCopiable && (
                        <button
                            onClick={copyToClipboard}
                            className="text-primary-500 hover:text-primary-700"
                        >
                            <FaCopy />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
