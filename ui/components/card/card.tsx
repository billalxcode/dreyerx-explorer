"use client"
import { useRouter } from 'next/navigation';
import React, { ReactNode, useCallback } from 'react';

export default function Card(props: {
    children?: React.ReactNode;
    title?: string;
    toolbar?: ReactNode;
    className?: string;
    href?: string;
}) {
    const router = useRouter()
    const onClick = useCallback((link: string) => {
        router.replace(link)
    }, [
        router
    ])

    const header = props.title ? (
        <div className="flex flex-row justify-between items-center">
            <h3 className="text-lg font-semibold">{props.title}</h3>
            {props.toolbar ?? null}
        </div>
    ) : null;

    const card = (
        <div
            className={`p-4 bg-container-default rounded-lg shadow-md border border-border-normal ${props.className}`}
            onClick={() => props.href ? onClick(props.href) : null}
        >
            {header}
            {props.children}
        </div>
    );

    return card;
}
