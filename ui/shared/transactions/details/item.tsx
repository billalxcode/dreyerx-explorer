import Link from 'next/link';
import React, { ReactNode, useCallback } from 'react';
import { FaCopy } from 'react-icons/fa6';

export default function TransactionItem(props: {
    title: string;
    value?: string;
    isCopiable?: boolean;
    children?: ReactNode;
    valueClassName?: string;
    href?: string;
}) {
    const copyToClipboard = useCallback(() => {
        navigator.clipboard.writeText(props.value ?? '');
    }, [props.value]);

    return (
        <div className="flex gap-5">
            <div className="font-semibold w-1/4">{props.title}</div>
            {props.children ?? (
                <div className="flex gap-2">
                    {props.href ? (
                        <Link href={props.href}>
                            <p
                                className={`text-text-primary cursor-pointer ${props.valueClassName}`}
                            >
                                {props.value}
                            </p>
                        </Link>
                    ) : (
                        <p className={props.valueClassName}>{props.value}</p>
                    )}
                    {props.isCopiable && (
                        <button
                            onClick={copyToClipboard}
                            className="text-white/50 hover:text-white/70"
                        >
                            <FaCopy />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
