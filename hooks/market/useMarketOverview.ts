import axios from "axios";
import { useCallback, useState } from "react";

export type Amount = {
    id: string;
    value: number;
    __typename: string;
};

export type TimestampedOhlc = {
    id: string;
    timestamp: number;
    open: Amount;
    high: Amount;
    low: Amount;
    close: Amount;
    __typename: string;
};

export type TokenMarket = {
    id: string;
    price: Amount;
    ohlc: TimestampedOhlc[];
    __typename: string;
};

export type Token = {
    id: string;
    address: string;
    chain: string;
    market: TokenMarket;
    __typename: string;
};

export type MarketOverviewData = {
    token: Token;
};

export default function useMarketOverview() {
    const [data, setData] = useState<MarketOverviewData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const url = "https://interface.gateway.uniswap.org/v1/graphql"

    const calculateMarketcap = useCallback(() => {
        if (data && !isLoading) {
            return 100000000 * data.token.market.price.value;
        } else {
            return 0
        }
    }, [
        data,
        isLoading
    ])

    const handleFetchMarketOverview = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(url, {
                variables: {
                    address: "0x2232f65655c7c41d8b6c8592da3a0e32586273ea",
                    fallback: false,
                    chain: "ETHEREUM",
                    duration: "DAY"
                },
                query: `query TokenPrice($chain: Chain!, $address: String = null, $duration: HistoryDuration!, $fallback: Boolean = false) {
                    token(chain: $chain, address: $address) {
                        id
                        address
                        chain
                        market(currency: USD) {
                            id
                            price {
                                id
                                value
                                __typename
                            }
                            ohlc(duration: $duration) @skip(if: $fallback) {
                                ...CandlestickOHLC
                                __typename
                            }
                            priceHistory(duration: $duration) @include(if: $fallback) {
                                ...PriceHistoryFallback
                                __typename
                            }
                            __typename
                        }
                        __typename
                    }
                }
                
                fragment CandlestickOHLC on TimestampedOhlc {
                    id
                    timestamp
                    open {
                        id
                        value
                        __typename
                    }
                    high {
                        id
                        value
                        __typename
                    }
                    low {
                        id
                        value
                        __typename
                    }
                    close {
                        id
                        value
                        __typename
                    }
                    __typename
                }
                
                fragment PriceHistoryFallback on TimestampedAmount {
                    id
                    value
                    timestamp
                    __typename
                }`

            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = response.data;
            setData(data.data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }   
    }, [])

    return {
        data,
        isLoading,
        calculateMarketcap,
        handleFetchMarketOverview
    }
}