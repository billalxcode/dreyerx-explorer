'use client'
import { motion } from "motion/react"
import { explorer_networks } from '@/config/constants';
import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

export default function HeaderNetworkSelect() {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const togglePopover = () => {
        setIsPopoverOpen(!isPopoverOpen);
    };

    return (
        <div className="relative">
            <div
                className="p-2 w-32 px-4 flex gap-2 items-center transition duration-300 border border-border-normal rounded-lg cursor-pointer hover:border-border-hover group"
                onClick={togglePopover}
            >
                <p  className="font-semibold">Mainnet</p>
                <BiChevronDown className="text-icon-default transition duration-300 group-hover:text-icon-hover" />
            </div>
            {isPopoverOpen && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-full mt-2 w-32 p-4 border border-border-normal rounded-lg shadow-lg right-0">
                    <ul>
                        {
                            explorer_networks.map((network, index) => (
                                <div key={index} className="w-full">
                                    <p className='text-sm font-semibold'>{network.name}</p>
                                </div>
                            ))
                        }
                    </ul>
                </motion.div>
            )}
        </div>
    );
}
