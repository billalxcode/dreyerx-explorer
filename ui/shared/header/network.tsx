'use client';
import { motion } from 'motion/react';
import { explorer_networks } from '@/config/constants';
import React, { useState, useEffect, useRef } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { FaRegCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function HeaderNetworkSelect() {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);

    const togglePopover = () => {
        setIsPopoverOpen(!isPopoverOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            popoverRef.current &&
            !popoverRef.current.contains(event.target as Node)
        ) {
            setIsPopoverOpen(false);
        }
    };

    useEffect(() => {
        if (isPopoverOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isPopoverOpen]);

    return (
        <div className="relative w-full lg:w-auto" ref={popoverRef}>
            <div
                className="p-2 px-4 flex w-full gap-2 justify-between lg:justify-start items-center transition duration-300 border border-border-normal rounded-lg cursor-pointer hover:border-border-hover group"
                onClick={togglePopover}
            >
                <p className="font-semibold">Mainnet</p>
                <BiChevronDown className="text-icon-default transition duration-300 group-hover:text-icon-hover" />
            </div>
            {isPopoverOpen && (
                <motion.div
                    initial={{
                        opacity: 0,
                        transformOrigin: 'top right',
                        scale: 0,
                    }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{
                        opacity: 0,
                        transformOrigin: 'top right',
                        scale: 0,
                    }}
                    className="absolute top-full mt-2 border w-full lg:w-auto border-border-normal rounded-lg shadow-lg right-0"
                >
                    <ul className="flex flex-col items-center w-full divide-y divide-border-normal">
                        {explorer_networks.map((network, index) => (
                            <Link
                                href={network.baseURL}
                                key={index}
                                className="w-full cursor-pointer px-4 py-4 flex flex-row items-center gap-2 hover:bg-bg-hover rounded-lg"
                            >
                                <FaRegCircle size={'8px'} />
                                <p className="text-sm font-semibold flex-grow text-left">
                                    {network.name}
                                </p>
                                <p
                                    className={`text-sm font-semibold ${network.status === 'online' ? 'text-green-500/50' : 'text-red-500/50'}`}
                                >
                                    {network.status === 'online'
                                        ? 'Online'
                                        : 'Offline'}
                                </p>
                            </Link>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    );
}
