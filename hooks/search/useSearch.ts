import { get_api_url } from "@/config/api";
import axios from "axios";
import { useCallback, useState } from "react";

export type AddressData = {
    address?: string;
    certified?: boolean;
    ens_info?: null | string;
    is_smart_contract_verified?: boolean;
    name?: null | string;
    priority: number;
    type: "address";
    url?: string;
    address_url?: string;
};

export type TransactionData = {
    priority: number;
    timestamp?: string;
    transaction_hash?: string;
    tx_hash?: string;
    type: "transaction";
    url: string;
};
export type BlockData = {
    block_hash?: string;
    block_number?: number;
    block_type?: "block";
    priority: number;
    timestamp?: string;
    type: "block";
    url: string;
};

export type SearchData = AddressData | TransactionData | BlockData;

export default function useSearch() {
    const [searchData, setSearchData] = useState<SearchData[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const resetData = useCallback(() => {
        setSearchData(null)
    }, [])

    const isFirstBlock = useCallback(() => {
        if (searchData && searchData.length > 0) {
            return searchData[0].type === "block";
        }
        return false;
    }, [
        searchData
    ])

    const handleFetchSearch = useCallback(async (query: string) => {
        setIsLoading(true);
        const params = `q=${query}`

        const url = get_api_url(`/v2/search?${params}`);

        try {
            const response = await axios.get(url, {
                headers: {
                    Accept: 'application/json'
                }
            });
            if (response.data.items) {
                setSearchData(response.data.items);
            }
        } catch (error) {
            console.error("Error fetching search data", error);
        } finally {
            setIsLoading(false);
        }
    }, [])

    return {
        searchData,
        isLoading,
        isFirstBlock,
        resetData,
        handleFetchSearch,
    }
}