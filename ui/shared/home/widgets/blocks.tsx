'use client';
import useMainBlocks from '@/hooks/main/useMainBlocks';
import Card from '@/ui/components/card/card';
import React, { useEffect, useRef } from 'react';
import BlockItem from '../../blocks/item';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function LatestBlocks() {
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const { blocks, handleFetchBlocks } = useMainBlocks();

    useEffect(() => {
        handleFetchBlocks();

        timerRef.current = setInterval(() => {
            handleFetchBlocks();
        }, 5_000);

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [handleFetchBlocks]);

    return (
        <Card
            title="Latest Blocks"
            className="w-1/3"
            toolbar={
                <Link href={'/blocks'}>
                    <h3 className="text-sm font-semibold">View More</h3>
                </Link>
            }
        >
            <div className="flex flex-col gap-2 mt-2">
                {blocks?.map((block, index) => {
                    if (index == 0) {
                        return (
                            <motion.div
                                key={block.height}
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <BlockItem block={block} />
                            </motion.div>
                        );
                    } else {
                        return <BlockItem block={block} key={block.height} />;
                    }
                })}
            </div>
        </Card>
    );
}
