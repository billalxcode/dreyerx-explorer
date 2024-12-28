export type ExplorerNetworkTypes = {
    baseURL: string;
    apiURL: string;
    name: string;
};

export const explorer_networks: ExplorerNetworkTypes[] = [
    {
        baseURL: "http://localhost:3000",
        apiURL: "https://testnet-scan.dreyerx.com/api",
        name: "Testnet",
    }
]