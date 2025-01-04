import { get_api_url } from '@/config/api';
import { useCallback, useState } from 'react';
import useMainBlocks from '../main/useMainBlocks';

export interface Miner {
    ens_domain_name: string | null;
    hash: string;
    implementations: string[];
    is_contract: boolean;
    is_scam: boolean;
    is_verified: boolean;
    metadata: string | null;
    name: string | null;
    private_tags: string[];
    proxy_type: string | null;
    public_tags: string[];
    watchlist_names: string[];
}

export interface Block {
    base_fee_per_gas: string;
    burnt_fees: string;
    burnt_fees_percentage: number | null;
    difficulty: string;
    gas_limit: string;
    gas_target_percentage: number;
    gas_used: string;
    gas_used_percentage: number;
    hash: string;
    height: number;
    miner: Miner;
    nonce: string;
    parent_hash: string;
    priority_fee: number;
    rewards: string[];
    size: number;
    timestamp: string;
    total_difficulty: string;
    transaction_count: number;
    transaction_fees: string;
    tx_count: number;
    tx_fees: string;
    type: string;
    uncles_hashes: string[];
    withdrawals_count: number | null;
}

export default function useBlocks() {
    const [startBlock, setStartBlock] = useState<string | null>(null);
    const [itemsCount, setItemsCount] = useState('25');
    const [blocks, setBlocks] = useState<Block[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const { handleFetchBlocks: handleFetchMainBlocks, getLatestBlock } =
        useMainBlocks();

    const handleFetchBlocks = useCallback(async () => {
        setIsLoading(true);
        if (startBlock === null) {
            handleFetchMainBlocks();
            const latestBlockHeight = getLatestBlock();
            setStartBlock(latestBlockHeight?.toString() ?? null);
        }
        const params = `block_number=${startBlock}&items_count=${itemsCount}&type=block`;
        const url = get_api_url(`/v2/blocks?${params}`);

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(async (response) => {
                const data = await response.json();
                setBlocks(data.items);
                setIsLoading(false);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [startBlock, handleFetchMainBlocks, getLatestBlock, itemsCount]);

    return {
        startBlock,
        itemsCount,
        blocks,
        isLoading,
        handleFetchBlocks,
        setStartBlock,
        setItemsCount,
    };
}
