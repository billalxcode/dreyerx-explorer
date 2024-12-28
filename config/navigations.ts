import { HTMLAttributeAnchorTarget } from "react"

export type NavigationTypes = {
    name: string,
    link: string,
    target?: HTMLAttributeAnchorTarget
}

export const navigations: NavigationTypes[] = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Transactions",
        link: "/txs"
    },
    {
        name: "Blocks",
        link: "/blocks"
    },
    {
        name: "Contracts",
        link: "/contracts"
    },
    {
        name: "Stats",
        link: "/stats"
    },
    {
        name: "Apps",
        link: "/apps"
    }
]