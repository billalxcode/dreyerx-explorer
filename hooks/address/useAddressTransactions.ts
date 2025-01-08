import { useCallback, useState } from "react";
import axios from "axios";
import { get_api_url } from "@/config/api";
import { Transaction } from "../transactions/useTransactions";

export default function useAddressTransactions(address: string) {
    const [addressTransactions, setAddressTransactions] = useState<Transaction[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleFetchTransactions = useCallback(async () => {
        setIsLoading(true);
        const url = get_api_url(`/v2/addresses/${address}/transactions`);
        try {
            const response = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setAddressTransactions(response.data.items);
        } finally {
            setIsLoading(false)
        }
        setIsLoading(false);
    }, [
        address
    ])

    return {
        addressTransactions,
        isLoading,
        handleFetchTransactions
    }
}