'use client'
import useTabs, { TabTypes } from '@/hooks/useTabs';
import React, { ReactNode } from 'react';
import TabItem from './item';

export default function TabsContainer(props: { tabs: TabTypes[], childrens: ReactNode[] }) {
    const { activeTab } = useTabs(props.tabs)
    
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
                {props.tabs.map((tab) => (
                    <TabItem key={tab.key} tab={tab} isActive={activeTab.key === tab.key} />
                ))}
            </div>
            {
                props.childrens.find((child, index) => index === props.tabs.findIndex((tab) => tab.key === activeTab.key))
            }
        </div>
    );
}
