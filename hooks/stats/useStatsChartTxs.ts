import { get_api_url } from '@/config/api';
import { useCallback, useState } from 'react';
import axios from 'axios';

export default function useStatsChartTxs() {
    const [transactionCounts, setTransactionCounts] = useState([]);
    const [labels, setLabels] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleFetchChartTxs = useCallback(async () => {
        setIsLoading(true);
        const url = get_api_url('/v2/stats/charts/transactions');

        try {
            const response = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const response_json = response.data;

            const labels = response_json.chart_data.map(
                (data: { date: string }) => data.date,
            );
            const transactionCounts = response_json.chart_data.map(
                (data: { transaction_count: string }) => data.transaction_count,
            );

            setLabels(labels);
            setTransactionCounts(transactionCounts);
        } catch (error) {
            console.error('Error fetching chart transactions:', error);
        } finally {
            setIsLoading(false);
        }
    }, [setIsLoading]);

    return {
        labels,
        transactionCounts,
        isLoading,
        handleFetchChartTxs,
    };
}
