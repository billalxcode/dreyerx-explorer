'use client';
import useAddress from '@/hooks/address/useAddress';
import Card from '@/ui/components/card/card';
import React, { useEffect } from 'react';
import AddressDetails from './details';
import useAddressTabCounter from '@/hooks/address/useAddressTabCounter';
import useAddresTokens from '@/hooks/address/useAddressTokens';

export default function AddressContainer(props: { address: string }) {
    const { address } = props;

    const { addressData, handleFetchAddress } = useAddress(address);
    const { addressTabsCounters, handleFetchCounter, } = useAddressTabCounter(address);
    const { addressTokens, handleFetchAddressTokens } = useAddresTokens(address)

    useEffect(() => {
        handleFetchAddress();
        handleFetchCounter();
        handleFetchAddressTokens()
    }, [handleFetchAddress, handleFetchCounter, handleFetchAddressTokens]);

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
                    addressTokens={addressTokens}
                />
            </Card>
        </>
    );
}
