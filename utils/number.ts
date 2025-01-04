export function weiToEther(wei: string): string {
    const weiInEther = 1e18;
    const ether = parseFloat(wei) / weiInEther;
    return ether.toFixed(2);
}
