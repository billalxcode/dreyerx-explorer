import { navigations } from '@/config/navigations';
import Link from 'next/link';
import React from 'react';

export default function HeaderMenu() {
    return (
        <ul className="flex flex-col lg:flex-row gap-2 lg:gap-1 w-full mt-1 lg:mt-0 divide-y divide-container-default">
            {navigations.map((nav, index) => {
                return (
                    <li
                        className="cursor-pointer transition duration-300 p-4 flex flex-row gap-2 items-center"
                        key={index}
                    >
                        {nav.icon && <nav.icon size={26} className='p-1 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg' />}
                        <Link href={nav.link} target={''}>
                            {nav.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
