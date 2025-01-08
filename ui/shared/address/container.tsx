'use client';
import useAddress from '@/hooks/address/useAddress';
import Card from '@/ui/components/card/card';
import React, { useEffect } from 'react';
import AddressDetails from './details';
import useAddressTabCounter from '@/hooks/address/useAddressTabCounter';

export default function AddressContainer(props: { address: string }) {
    const { address } = props;

    const { addressData, handleFetchAddress } = useAddress(address);
    const { handleFetchCounter, addressTabsCounters } = useAddressTabCounter(address);

    useEffect(() => {
        handleFetchAddress();
        handleFetchCounter();
    }, [handleFetchAddress, handleFetchCounter]);

    return (
        <>
            <Card>
                <p className="text-yellow-600">Feature under development</p>
            </Card>
            <Card title="Address Details">
                <AddressDetails
                    address={address}
                    addressData={addressData}
                    addressTabsCounters={addressTabsCounters}
                />
            </Card>
        </>
    );
}
