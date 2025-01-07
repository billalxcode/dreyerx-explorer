import { get_api_url } from '@/config/api';
import { useState, useCallback } from 'react';
import axios from 'axios';

export type Token = {
    circulating_market_cap: string;
    icon_url: string;
    name: string;
    decimals: string;
    symbol: string;
    address: string;
    type: string;
    holders: string;
    exchange_rate: string;
    total_supply: string;
};

export type PrivateTag = {
    address_hash: string;
    display_name: string;
    label: string;
};

export type WatchlistName = {
    display_name: string;
    label: string;
};

export type PublicTag = {
    address_hash: string;
    display_name: string;
    label: string;
};

export type AddressData = {
    creator_address_hash: string;
    creation_transaction_hash: string;
    token: Token;
    coin_balance: string;
    exchange_rate: string;
    implementation_address: string;
    block_number_balance_updated_at: number;
    hash: string;
    implementation_name: string;
    name: string;
    is_contract: boolean;
    private_tags: PrivateTag[];
    watchlist_names: WatchlistName[];
    public_tags: PublicTag[];
    is_verified: boolean;
    has_beacon_chain_withdrawals: boolean;
    has_custom_methods_read: boolean;
    has_custom_methods_write: boolean;
    has_decompiled_code: boolean;
    has_logs: boolean;
    has_methods_read: boolean;
    has_methods_write: boolean;
    has_methods_read_proxy: boolean;
    has_methods_write_proxy: boolean;
    has_token_transfers: boolean;
    has_tokens: boolean;
    has_validated_blocks: boolean;
};

export default function useAddress(address: string) {
    const [addressData, setAddressData] = useState<AddressData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const handleFetchAddress = useCallback(async () => {
        setIsLoading(true);
        
        const url = get_api_url(`/v2/addresses/${address}`);
        try {
            const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
            }
            });
            setAddressData(response.data);
        } catch (error) {
            console.error('Error fetching address data:', error);
        } finally {
            setIsLoading(false);
        }
    }, [
        address,
    ])

    return {
        addressData,
        isLoading,
        handleFetchAddress,
    };
}