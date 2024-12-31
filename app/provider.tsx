"use client"
import React, { ReactNode, useCallback, useState } from 'react';

export default function Provider(props: {
    children: ReactNode
}) {
    const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setGlowPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        },
        [],
    );

    return (
        <div
            onMouseMove={handleMouseMove}
            className="min-h-screen w-screen absolute inset-0 h-full bg-[radial-gradient(#ffffff2e,transparent_1px)] [background-size:16px_16px]"
        >
            <div
                className="absolute w-[80px] h-[120px] bg-effect-cursor-default blur-[50px] z-[1] pointer-events-none"
                style={{
                    left: `${glowPosition.x - 40}px`,
                    top: `${glowPosition.y - 60}px`,
                }}
            ></div>

            { props.children }
        </div>
    );
}