import { get_api_url } from "@/config/api";
import { useCallback, useState } from "react";

export default function useStatsChartTxs() {
    const [ transactionCounts, setTransactionCounts ] = useState([])
    const [ labels, setLabels ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    const handleFetchChartTxs = useCallback(() => {
        setIsLoading(true)
        const url = get_api_url("/v2/stats/charts/transactions")

        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(async (response) => {
            const response_json = await response.json()

            const labels = response_json.chart_data.map((data: { date: string }) => data.date)
            const transactionCounts = response_json.chart_data.map((data: { transaction_count: string }) => data.transaction_count)

            setLabels(labels)
            setTransactionCounts(transactionCounts)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [
        setIsLoading
    ])

    return {
        labels,
        transactionCounts,
        isLoading,
        handleFetchChartTxs
    }
}