import React from 'react';

export default function SkeletonCard(props: { className?: string }) {
    return (
        <div className={`animate-pulse ${props.className}`}>
            <div className="bg-white/20 h-5 w-full rounded-lg"></div>
        </div>
    );
}
