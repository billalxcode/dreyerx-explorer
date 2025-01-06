export type ExplorerNetworkTypes = {
    name: string;
    baseURL: string;
    apiURL: string;
    status: "online" | "offline";
};

export const explorer_networks: ExplorerNetworkTypes[] = [
    {
        name: 'Mainnet',
        baseURL: 'http://localhost:3000',
        apiURL: 'https://scan.dreyerx.com/api',
        status: "online"
    },
    {
        name: 'Testnet',
        baseURL: 'http://localhost:3001',
        apiURL: 'https://testnet-scan.dreyerx.com/api',
        status: "offline"
    },
];
