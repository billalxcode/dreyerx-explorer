import { HTMLAttributeAnchorTarget } from 'react';
import { IconType } from 'react-icons';
import { FcStatistics } from 'react-icons/fc';
import { GrHome, GrTransaction } from 'react-icons/gr';
import { HiOutlineCube } from 'react-icons/hi';
import { IoContract } from 'react-icons/io5';
import { MdAppShortcut } from 'react-icons/md';

export type NavigationTypes = {
    name: string;
    link: string;
    target?: HTMLAttributeAnchorTarget;
    icon?: IconType;
};

export const navigations: NavigationTypes[] = [
    {
        name: 'Home',
        link: '/',
        icon: GrHome
    },
    {
        name: 'Transactions',
        link: '/txs',
        icon: GrTransaction,
    },
    {
        name: 'Blocks',
        link: '/blocks',
        icon: HiOutlineCube
    },
    {
        name: 'Contracts',
        link: '/contracts',
        icon: IoContract
    },
    {
        name: 'Stats',
        link: '/stats',
        icon: FcStatistics
    },
    {
        name: 'Apps',
        link: '/apps',
        icon: MdAppShortcut
    },
];
