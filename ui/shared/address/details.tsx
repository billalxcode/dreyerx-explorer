import { AddressData } from '@/hooks/address/useAddress';
import Card from '@/ui/components/card/card';
import React from 'react';
import AddressItem from './item';

export default function AddressDetails(props: {
    address: string;
    addressData: AddressData | null;
}) {
    return (
        <Card className="mt-2">
            <div className="flex flex-col gap-4 divide-y w-full divide-border-normal overflow-x-auto">
                <div className="flex flex-col gap-4">
                    <AddressItem title="Address" value={props.address} />
                    <AddressItem
                        title="Balance"
                        value={props.addressData?.coin_balance}
                    />
                    <AddressItem title='Transaction Sent' value='' />
                </div>
            </div>
        </Card>
    );
}
