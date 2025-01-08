import { get_api_url } from "@/config/api";
import axios from "axios";
import { useCallback, useState } from "react";

export type AddressTabCounter = {
    transactions_count: number;
    token_transfers_count: number;
    withdrawals_count: number;
    validations_count: number;
    internal_transactions_count: number;
    internal_txs_count: number;
    logs_count: number;
    token_balances_count: number;
};

export default function useAddressTabCounter(address: string) {
    const [addressTabsCounters, setAddressTabsCounter] = useState<AddressTabCounter | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleFetchCounter = useCallback(async () => {
        setIsLoading(true);
        const url = get_api_url(`/v2/addresses/${address}/tabs-counters`);
        try {
            const response = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setAddressTabsCounter(response.data);
        } finally {
            setIsLoading(false)
        }
        setIsLoading(false);
    }, [
        address
    ])

    return {
        addressTabsCounters,
        isLoading,
        handleFetchCounter
    }
}