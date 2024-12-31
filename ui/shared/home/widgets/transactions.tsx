import Card from '@/ui/components/card/card';
import CardEmptyData from '@/ui/components/card/empty';
import React from 'react';

export default function LatestTransactions() {
    return (
        <Card title="Latest Transactions" className="w-full">
            <CardEmptyData />
        </Card>
    );
}
