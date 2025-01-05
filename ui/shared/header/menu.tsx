import { navigations } from '@/config/navigations';
import Link from 'next/link';
import React from 'react';

export default function HeaderMenu() {
    return (
        <ul className="flex flex-col lg:flex-row gap-2 lg:gap-1 w-full mt-10 lg:mt-0 divide-y divide-container-default">
            {navigations.map((nav, index) => {
                return (
                    <li
                        className="cursor-pointer transition duration-300 p-4"
                        key={index}
                    >
                        <Link href={nav.link} target={''}>
                            {nav.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
