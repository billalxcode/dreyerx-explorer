export type ExplorerNetworkTypes = {
    name: string;
    baseURL: string;
    apiURL: string;
};

export const explorer_networks: ExplorerNetworkTypes[] = [
    {
        name: "Mainnet",
        baseURL: "http://localhost:3000",
        apiURL: "https://scan.dreyerx.com/api",
    },
    {
        name: "Testnet",
        baseURL: "http://localhost:3001",
        apiURL: "https://testnet-scan.dreyerx.com/api",
    }
]