'use client';
import React from 'react';
import { motion } from 'motion/react';
import { CiSearch } from 'react-icons/ci';

export default function SearchBar() {
    return (
        <div className="flex w-full justify-center">
            <motion.div
                whileHover={{
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                }}
                whileFocus={{
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                }}
                transition={{
                    ease: 'easeInOut',
                    duration: 0.4,
                }}
                className="flex flex-row-reverse w-[500px] bg-container-default backdrop-blur-lg justify-between items-center bg-opacity-10 rounded-lg p-3 border border-border-normal"
            >
                <input
                    type="text"
                    name="query"
                    id="query"
                    className="w-full bg-transparent focus:outline-none"
                    placeholder="Search txns, accounts, blocks, and more"
                />

                <CiSearch size={'24px'} className="justify-self-center mx-2" />
            </motion.div>
        </div>
    );
}
