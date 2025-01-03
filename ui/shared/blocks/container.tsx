'use client';
import useBlocks from '@/hooks/blocks/useBlocks';
import Card from '@/ui/components/card/card';
import { motion } from 'motion/react';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import BlockItem from './item';

export default function BlocksContainer() {
    const timeRef = useRef<NodeJS.Timeout | null>(null);
    const { blocks, handleFetchBlocks } = useBlocks();

    useEffect(() => {
        handleFetchBlocks();

        timeRef.current = setInterval(() => {
            handleFetchBlocks();
        }, 5_000);

        return () => {
            if (timeRef.current) {
                clearInterval(timeRef.current);
            }
        };
    }, [handleFetchBlocks]);

    return (
        <Card
            title="Blocks"
            className="w-full"
            toolbar={
                <Link href={'/blocks'}>
                    <h3 className="text-sm font-semibold">Next</h3>
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
