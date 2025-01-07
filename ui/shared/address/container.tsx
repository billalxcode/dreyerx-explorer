"use client"
import useAddress from '@/hooks/address/useAddress';
import Card from '@/ui/components/card/card';
import React, { useEffect } from 'react';
import AddressDetails from './details';

export default function AddressContainer(props: { address: string }) {
    const { address } = props;

    const { addressData, handleFetchAddress } = useAddress(address)

    useEffect(() => {
        handleFetchAddress()
    }, [
        handleFetchAddress
    ])

    return (
        <>
            <Card>
                <p className='text-yellow-600'>Feature under development</p>
            </Card>
            <Card title="Address Details">
                <AddressDetails address={address} addressData={addressData} />
            </Card>
        </>
    );
}
