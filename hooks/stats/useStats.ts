import { get_api_url } from '@/config/api';
import { useCallback, useState } from 'react';
import axios from 'axios';

export type Stats = {
    average_block_time: number;
    coin_image: string | null;
    coin_price: number | null;
    coin_price_change_percentage: number | null;
    gas_price_updated_at: string;
    gas_prices: {
        slow: number;
        average: number;
        fast: number;
    };
    gas_prices_update_in: number;
    gas_used_today: number | null;
    market_cap: string;
    network_utilization_percentage: number;
    secondary_coin_image: string | null;
    secondary_coin_price: number | null;
    static_gas_price: number | null;
    total_addresses: string;
    total_blocks: string;
    total_gas_used: string;
    total_transactions: string;
    transactions_today: string;
    tvl: number | null;
};

export default function useStats() {
    const [stats, setStats] = useState<Stats | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleFetchStats = useCallback(async () => {
        setIsLoading(true);
        const url = get_api_url('/v2/stats');
        try {
            const response = await axios.get(url, {
                headers: {
                    accept: 'application/json',
                },
            });
            setStats(response.data);
        } catch (error) {
            console.error('Failed to fetch stats:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {
        stats,
        isLoading,
        handleFetchStats,
    };
}
