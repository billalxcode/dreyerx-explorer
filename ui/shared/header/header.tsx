'use client';
import Link from 'next/link';
import HeaderMenu from './menu';
import HeaderNetworkSelect from './network';
import { FaBars } from 'react-icons/fa6';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const drawerVariants = {
        hidden: { y: '100%' },
        visible: { y: 0 },
    };

    return (
        <div className="flex justify-between items-center w-full p-4 select-none px-8">
            <Link href={'/'} className="font-bold">
                DREYERX EXPLORER
            </Link>

            <div className="lg:hidden">
                <FaBars onClick={toggleMenu} className="cursor-pointer" />
            </div>

            <div className="hidden lg:gap-20 lg:flex lg:justify-between lg:items-center">
                <HeaderMenu />
                <HeaderNetworkSelect />
            </div>

            <motion.div
                className={`fixed inset-0 bg-black bg-opacity-70 backdrop-blur-2xl z-50 transition-transform lg:hidden`}
                initial="hidden"
                animate={isOpen ? 'visible' : 'hidden'}
                variants={drawerVariants}
            >
                <div className="absolute w-full p-4">
                    <div className="flex flex-col items-start h-full p-4">
                        <div className="flex justify-end w-full">
                            <FaTimes
                                onClick={toggleMenu}
                                className="cursor-pointer"
                            />
                        </div>
                        <HeaderMenu />
                        {/* <HeaderNetworkSelect /> */}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
