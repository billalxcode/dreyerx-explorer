'use client';
import ReactLenis, { LenisRef } from 'lenis/react';
import Image from 'next/image';
import React, {
    ReactNode,
    useEffect,
    useRef,
} from 'react';

export default function Provider(props: { children: ReactNode }) {
    const lenisRef = useRef<LenisRef | null>(null);

    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.lenis?.start();
        }
    });

    return (
        <ReactLenis
            className="min-h-screen w-full"
            root
            ref={lenisRef}
            options={{
                autoRaf: true,
                smoothWheel: true,
                duration: 1.1,
                lerp: 0.05,
            }}
        >
            <div
                className="min-h-screen w-full lg:w-screen md:w-full inset-0 h-full bg-[radial-gradient(#ffffff2e,transparent_1px)] [background-size:16px_16px] relative"
            >
                <Image
                    className='absolute inset-0 z-[-10]'
                    src={"/assets/svgs/gradient.svg"}
                    alt='Gradient'
                    width={500}
                    height={500}
                />
                <div className="relative z-1 inset-1">
                    {props.children}
                </div>
            </div>
        </ReactLenis>
    );
}
