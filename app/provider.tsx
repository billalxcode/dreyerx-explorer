'use client';
import ReactLenis from 'lenis/react';
import React, { ReactNode, useCallback, useState } from 'react';

export default function Provider(props: { children: ReactNode }) {
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
        <ReactLenis
            root
            options={{
                autoRaf: true,
                smoothWheel: true,
                duration: 1.1,
                lerp: 0.1,
                syncTouch: true,
                
            }}
        >
            <div
                onMouseMove={handleMouseMove}
                className="min-h-screen w-full lg:w-screen md:w-full absolute inset-0 h-full bg-[radial-gradient(#ffffff2e,transparent_1px)] [background-size:16px_16px]"
            >
                <div
                    className="hidden lg:absolute w-[80px] h-[120px] bg-effect-cursor-default blur-[50px] z-[1] pointer-events-none"
                    style={{
                        left: `${glowPosition.x - 40}px`,
                        top: `${glowPosition.y - 60}px`,
                    }}
                />

                {props.children}
            </div>
        </ReactLenis>
    );
}
