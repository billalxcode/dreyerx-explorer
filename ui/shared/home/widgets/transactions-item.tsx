import { Transaction } from '@/hooks/main/transactions';
import Card from '@/ui/components/card/card';
import { shortenString } from '@/utils/strings';
import React from 'react';

export default function TransactionItem(props: { transaction: Transaction }) {
    return (
        <Card title={`${shortenString(props.transaction.hash, 10)}`}>
            <p>Hello World</p>
        </Card>
    );
}
