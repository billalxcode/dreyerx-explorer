import Card from '@/ui/components/card/card';
import SkeletonText from '@/ui/components/skeleton/text';
import React from 'react';

export default function HeroItem(props: {
    title: string;
    value: string;
    isLoading?: boolean;
    icon?: React.ReactNode;
}) {
    return (
        <Card className="w-full flex-1">
            <div className="flex gap-4 lg:gap-5 items-center">
                <div className="p-1 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg">
                    {props.icon ?? null}
                </div>
                <div className="flex flex-col">
                    <h2 className="text-white/50 text-sm">{props.title}</h2>
                    {props.isLoading ? (
                        <SkeletonText />
                    ) : (
                        <p className="font-semibold text-lg">{props.value}</p>
                    )}
                </div>
            </div>
        </Card>
    );
}
