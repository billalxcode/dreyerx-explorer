import Card from "@/ui/components/card/card";
import React from "react";
import HeroItem from "./item";

export default function HeroSection() {
  return (
    <div className="flex flex-row gap-2 w-full">
      <Card title="Network Info" className="w-full">
        <div className="flex flex-row mt-2 gap-2">
          <div className="flex flex-col gap-2 w-full">
            <HeroItem title="Transactions" value="100k" />
            <HeroItem title="Last Blocks" value="10k" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <HeroItem title="Gas" value="10 Gwei" />
            <HeroItem title="Wallet Addresses" value="10" />
          </div>
        </div>
      </Card>
      <Card title="Daily Transactions" className="w-full">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <p>No Data</p>
        </div>
      </Card>
    </div>
  );
}
