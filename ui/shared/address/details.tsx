import { AddressData } from '@/hooks/address/useAddress';
import Card from '@/ui/components/card/card';
import React from 'react';
import AddressItem from './item';
import { AddressTabCounter } from '@/hooks/address/useAddressTabCounter';
import { AddressTokens } from '@/hooks/address/useAddressTokens';
import AddressTokensContainer from './tokens';
import { weiToEther } from '@/utils/number';
import { shortenString } from '@/utils/strings';

export default function AddressDetails(props: {
    address: string;
    addressData: AddressData | null;
    addressTabsCounters: AddressTabCounter | null,
    addressTokens: AddressTokens[] | null
}) {
    return (
        <Card className="mt-2">
            <div className="flex flex-col gap-4 divide-y w-full divide-border-normal overflow-x-auto">
                <div className="flex flex-col gap-4">
                    <AddressItem title="Address" value={shortenString(props.address, 10)} />
                    <AddressItem
                        title="Balance"
                        value={weiToEther(props.addressData?.coin_balance.toString() ?? "0")}
                    />
                    <AddressItem title="Transaction Sent" value={props.addressTabsCounters?.transactions_count.toString() ?? "0" } />
                </div>
                <div className="flex flex-col pt-4">
                    <div className="flex flex-col gap-2 lg:gap-5">
                        <p className='font-semibold'>Token Holdings</p>
                        <AddressTokensContainer addressTokens={props.addressTokens} />
                    </div>
                </div>
            </div>
        </Card>
    );
}
