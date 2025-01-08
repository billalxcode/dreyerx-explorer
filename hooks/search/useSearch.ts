import { get_api_url } from "@/config/api";
import axios from "axios";
import { useCallback, useState } from "react";

export type AddressData = {
    address: string;
    certified: boolean;
    ens_info: null | string;
    is_smart_contract_verified: boolean;
    name: null | string;
    priority: number;
    type: "address";
    url: string;
};

export type TransactionData = {
    priority: number;
    timestamp: string;
    transaction_hash: string;
    tx_hash: string;
    type: "transaction";
    url: string;
};

export type SearchData = AddressData | TransactionData;

export default function useSearch() {
    const [searchData, setSearchData] = useState<SearchData[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);

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
        handleFetchSearch,
    }
}