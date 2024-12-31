import Link from 'next/link';
import React, { ReactNode } from 'react';

export default function Card(props: {
    children?: React.ReactNode;
    title?: string;
    toolbar?: ReactNode;
    className?: string;
    href?: string
}) {
    const header = props.title ? (
        <div className="flex flex-row justify-between items-center">
            <h3 className="text-lg font-semibold">{props.title}</h3>
            {props.toolbar ?? null}
        </div>
    ) : null

    const card = (
        <div
            className={`p-4 bg-container-default rounded-lg shadow-md border border-border-normal ${props.className}`}
        >
            { header }
            { props.children }
        </div>
    )

    if (props.href) {
        return (
            <Link href={props.href}>
                { card }
            </Link>
        )
    }

    return card;
}
