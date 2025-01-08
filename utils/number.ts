export function weiToEther(wei: string): string {
    const weiInEther = 1e18;
    const ether = parseFloat(wei) / weiInEther;
    return ether.toFixed(2);
}

export function weiToFormattedDecimals(wei: string, decimals: number): string {
    const weiInEther = 10 ** decimals;
    const ether = parseFloat(wei) / weiInEther;
    return ether.toFixed(2);
}