import { get_api_url } from '@/config/api';
import { useCallback, useState } from 'react';

export type BlockDetails = {
    base_fee_per_gas: string;
    burnt_fees: string;
    burnt_fees_percentage: number;
    difficulty: string;
    extra_data: string;
    gas_limit: string;
    gas_target_percentage: number;
    gas_used: string;
    gas_used_percentage: number;
    hash: string;
    height: number;
    miner: MinerDetails;
    nonce: string;
    parent_hash: string;
    priority_fee: string;
    rewards: Reward[];
    size: number;
    state_root: string;
    timestamp: string;
    total_difficulty: string;
    transaction_count: number;
    transaction_fees: string;
    type: string;
    uncles_hashes: string[];
    withdrawals_count: number;
};

export type MinerDetails = {
    hash: string;
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

export type Reward = {
    reward: number;
    type: string;
};

export default function useBlockDetails(block: string) {
    const [blockDetails, setBlockDetails] = useState<BlockDetails | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleFetchBlockDetails = useCallback(async () => {
        setIsLoading(true);
        try {
            const url = get_api_url('/v2/blocks/' + block);
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(async (response) => {
                    const data = await response.json();
                    setBlockDetails(data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [block]);

    return {
        blockDetails,
        isLoading,
        handleFetchBlockDetails,
    };
}
