import axios from "axios";
import { useCallback, useState } from "react";

export interface MarketOverviewData {
    usd: number;
    usd_market_cap: number;
}

export default function useMarketOverview() {
    const [data, setData] = useState<MarketOverviewData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=dreyerx-network&vs_currencies=USD&include_market_cap=true`

    const handleFetchMarketOverview = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(url, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = response.data;
            console.log(data)
            setData(data['dreyerx-network']);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }   
    }, [
        url
    ])

    return {
        data,
        isLoading,
        handleFetchMarketOverview
    }
}