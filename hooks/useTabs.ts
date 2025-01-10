import { useSearchParams } from "next/navigation";
import { AddressData } from "./address/useAddress";

export type TabTypes = {
    key: string;
    name: string;
    href: string;
    condition?: (addressData: AddressData) => boolean;
};

export default function useTabs(tabs: TabTypes[]) {
    const searchParams = useSearchParams();
    const queryTab = searchParams.get('tab');

    const activeTab = tabs.find((tab) => tab.key === queryTab) || tabs[0];

    return {
        tabs,
        activeTab,
    };
}