import { get_api_url } from '@/config/api';
import { useCallback, useState } from 'react';

export type Transaction = {
    message?: string;
    timestamp: string;
    fee: Fee;
    gas_limit: number;
    block: number;
    status: 'ok' | 'error';
    method: string;
    confirmations: number;
    type: number;
    exchange_rate: string;
    to: Address;
    tx_burnt_fee: string;
    max_fee_per_gas: string;
    result: string;
    hash: string;
    gas_price: string;
    priority_fee: string;
    base_fee_per_gas: string;
    from: Address;
    token_transfers: TokenTransfer[];
    transaction_types: string[];
    gas_used: string;
    created_contract: Address;
    position: number;
    nonce: number;
    has_error_in_internal_transactions: boolean;
    actions: Action[];
    decoded_input: DecodedInput;
    token_transfers_overflow: boolean;
    raw_input: string;
    value: string;
    max_priority_fee_per_gas: string;
    revert_reason: string;
    confirmation_duration: number[];
    transaction_tag: string;
};

export type Fee = {
    type: 'maximum' | 'actual';
    value: string;
};

export type Address = {
    hash: string;
    ens_domain_name: string;
    implementation_name: string;
    name: string;
    is_contract: boolean;
    private_tags: Tag[];
    watchlist_names: Tag[];
    public_tags: Tag[];
    is_verified: boolean;
};

export type Tag = {
    address_hash: string;
    display_name: string;
    label: string;
};

export type TokenTransfer = {
    block_hash: string;
    from: Address;
    log_index: string;
    method: string;
    timestamp: string;
    to: Address;
    token: Token;
    total: Total;
    transaction_hash: string;
    type: string;
};

export type Token = {
    circulating_market_cap: string;
    icon_url: string;
    name: string;
    decimals: string;
    symbol: string;
    address: string;
    type: string;
    holders: string;
    exchange_rate: string;
    total_supply: string;
};

export type Total = {
    decimals: string;
    value: string;
};

export type Action = {
    data: ActionData;
    protocol: string;
    type: string;
};

export type ActionData = {
    debt_amount?: string;
    debt_symbol?: string;
    debt_address?: string;
    collateral_amount?: string;
    collateral_symbol?: string;
    collateral_address?: string;
    block_number: number;
    amount?: string;
    symbol?: string;
    address?: string;
    name?: string;
    to?: string;
    ids?: string[];
    address0?: string;
    address1?: string;
    amount0?: string;
    amount1?: string;
    symbol0?: string;
    symbol1?: string;
};

export type DecodedInput = {
    method_call: string;
    method_id: string;
    parameters: Parameter[];
};

export type Parameter = {
    name: string;
    type: string;
    value: string;
};

export default function useTransactionDetails(transaction_hash: string) {
    const [transactionDetails, setTransactionDetails] =
        useState<Transaction | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleFetchTransactionDetails = useCallback(() => {
        setIsLoading(true);

        const url = get_api_url(`/v2/transactions/${transaction_hash}`);
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(async (response) => {
                const data = await response.json();
                setTransactionDetails(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [transaction_hash]);

    return {
        transactionDetails,
        isLoading,
        handleFetchTransactionDetails,
    };
}
