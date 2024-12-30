import { useCallback, useState } from "react"

export type Transaction = {
    timestamp: Date,
    fee?: {
        type: "maximum" | "actual",
        value: string
    },
    gas_limit?: 0,
    block: number,
    status: "ok" | "error",
    method: "transferFrom" | "transfer" | "approve",
    confirmations: number,
    type: number,
    exchange_rate: number,
    to: {
        hash: string,
        implementation_name?: string,
        name: string,
        is_contract: boolean,
        private_tags: {
            address_hash: string,
            display_name: string,
            label: string
        }[],
        watchlist_names: {
            display_name: string,
            label: string
        }[],
        public_tags: {
            address_hash: string,
            display_name: string,
            label: string 
        }[],
        is_verified: boolean,
    },
    tx_burnt_fee: string,
    max_fee_per_gas: string,
    result: string,
    hash: string,
    gas_price: string,
    priority_fee: string,
    base_fee_per_gas: string,
    from: {
        hash: string,
        implementation_name?: string,
        name: string,
        is_contract: boolean,
        private_tags: {
            address_hash: string,
            display_name: string,
            label: string
        }[],
        watchlist_names: {
            display_name: string,
            label: string
        }[],
        public_tags: {
            address_hash: string,
            display_name: string,
            label: string
        }[],
        is_verified: boolean,
    },
    token_transfers: {
        block_hash: string,
        from: {
            hash: string,
            implementation_name?: string,
            name: string,
            is_contract: boolean,
            private_tags: {
                address_hash: string,
                display_name: string,
                label: string
            }[],
            watchlist_names: {
                display_name: string,
                label: string
            }[],
            public_tags: {
                address_hash: string,
                display_name: string,
                label: string
            }[],
            is_verified: boolean,
        },
        log_index: string,
        method: string,
        timestamp: string,
        to: {
            hash: string,
            implementation_name?: string,
            name: string,
            is_contract: boolean,
            private_tags: {
                address_hash: string,
                display_name: string,
                label: string
            }[],
            watchlist_names: {
                display_name: string,
                label: string
            }[],
            public_tags: {
                address_hash: string,
                display_name: string,
                label: string
            }[],
            is_verified: boolean,
        },
        token: {
            circulating_market_cap: string,
            icon_url: string,
            name: string,
            decimals: string,
            symbol: string,
            address: string,
            type: string,
            holders: string,
            exchange_rate: string,
            total_supply: string,
        },
        total: {
            decimals: string,
            value: string,
        },
        tx_hash: string,
        type: string,
    }[],
    tx_types: ("token_transfer" | "contract_creation" | "contract_call" | "token_creation" | "coin_transfer")[],
    gas_used: string,
    created_contract?: {
        hash: string,
        implementation_name: string,
        name: string,
        is_contract: boolean,
        private_tags: {
            address_hash: string,
            display_name: string,
            label: string
        }[],
        watchlist_names: {
            display_name: string,
            label: string
        }[],
        public_tags: {
            address_hash: string,
            display_name: string,
            label: string
        }[],
        is_verified: boolean
    },
    position: number,
    nonce: number,
    has_error_in_internal_txs: boolean,
    actions: {
        data: {
            debt_amount: string,
            debt_symbol: string,
            debt_address: string,
            collateral_amount: string,
            collateral_symbol: string,
            collateral_address: string,
            block_number: number,
        },
        protocol: string,
        type: string
    }[],
    decoded_input?: {
        method_call: string,
        method_id: string,
        parameters: {
            name: string,
            type: string,
            value: string
        }[]
    },
    token_transfers_overflow: boolean,
    raw_input: string,
    value: string,
    max_priority_fee_per_gas: string,
    revert_reason?: string,
    confirmation_duration: number[],
    tx_tag: string
}

export default function useTransactions() {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    const handleFetchTransactions = useCallback(() => {

    }, [])

    return {
        transactions,
        handleFetchTransactions,
        setTransactions
    }
}