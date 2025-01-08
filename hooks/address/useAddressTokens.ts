import { get_api_url } from "@/config/api";
import axios from "axios";
import { useCallback, useState } from "react";

export type Token = {
    address: string;
    circulating_market_cap: string | null;
    decimals: string;
    exchange_rate: string | null;
    holders: string;
    icon_url: string | null;
    name: string;
    symbol: string;
    total_supply: string;
    type: string;
    volume_24h: string | null;
};

export type AddressTokens = {
    token: Token;
    token_id: string | null;
    token_instance: string | null;
    value: string;
};

export default function useAddresTokens(address: string) {
    const [addressTokens, setAddressTokens] = useState<AddressTokens[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleFetchAddressTokens = useCallback(async () => {
        setIsLoading(true);
        const params = "types=ERC-20,ERC-721,ERC-1155"
        const url = get_api_url(`/v2/addresses/${address}/tokens?${params}`);
        
        try {
            
            const response = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setAddressTokens(response.data.items);
        } finally {
            setIsLoading(false)
        }
    }, [
        address
    ])

    return {
        addressTokens,
        isLoading,
        handleFetchAddressTokens
    }
}