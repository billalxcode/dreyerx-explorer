'use client';
import useAddress, { AddressData } from '@/hooks/address/useAddress';
import Card from '@/ui/components/card/card';
import React, { useEffect } from 'react';
import AddressDetails from './details';
import useAddressTabCounter from '@/hooks/address/useAddressTabCounter';
import useAddresTokens from '@/hooks/address/useAddressTokens';
import TabsContainer from '@/ui/components/tabs/container';
import { TabTypes } from '@/hooks/useTabs';
import AddressTransactions from './transactions';

export const tabs: TabTypes[] = [
    {
        key: 'transactions',
        name: 'Transactions',
        href: '/address/[address]',
    },
    {
        key: 'tokens',
        name: 'Tokens',
        href: '/address/[address]/tokens',
    },
    {
        key: 'contracts',
        name: 'Contracts',
        href: '/address/[address]/contracts',
        condition: (addressData: AddressData) => addressData?.is_contract,
    },
];

export default function AddressContainer(props: { address: string }) {
    const { address } = props;

    const { addressData, handleFetchAddress } = useAddress(address);
    const { addressTabsCounters, handleFetchCounter } =
        useAddressTabCounter(address);
    const { addressTokens, handleFetchAddressTokens } =
        useAddresTokens(address);

    useEffect(() => {
        handleFetchAddress();
        handleFetchCounter();
        handleFetchAddressTokens();
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

            <TabsContainer tabs={tabs} childrens={[
                <AddressTransactions key={tabs[0].key} address={address} />,
                <Card key={tabs[1].key}>
                    <p className="text-yellow-600">Feature under development</p>
                </Card>,
                <Card key={tabs[2].key}>
                    <p className="text-yellow-600">Feature under development</p>
                </Card>
            ]} />
        </>
    );
}
