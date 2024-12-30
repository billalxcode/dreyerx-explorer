import Card from "@/ui/components/card/card";
import React, { useEffect } from "react";
import HeroItem from "./item";
import useStats from "@/hooks/stats/useStats";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function HeroSection() {
  const { stats, handleFetchStats, isLoading } = useStats();
  const [charts, setCharts] = React.useState<ApexOptions>({
    series: [
      {
        name: "TRANSACTIONS",
        data: [0, 20, 0, 300, 20, 0, 90, 100, 300, 500, 29, 84, 43],
      },
    ],
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    labels: [
      "2023-01-01",
      "2023-01-02",
      "2023-01-03",
      "2023-01-04",
      "2023-01-05",
      "2023-01-06",
      "2023-01-07",
      "2023-01-08",
      "2023-01-09",
      "2023-01-10",
      "2023-01-11",
      "2023-01-12",
      "2023-01-13",
    ],
    xaxis: {
      type: "datetime",
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      opposite: true,
    },
    theme: {
      mode: "dark",
    },
    grid: {
      show: false,
    },
  });

  useEffect(() => {
    handleFetchStats();
  }, [handleFetchStats]);

  return (
    <div className="flex flex-row gap-2 w-full">
      <Card title="Network Info" className="w-full">
        <div className="flex flex-row mt-2 gap-2">
          <div className="flex flex-col gap-2 w-full">
            <HeroItem
              title="Transactions"
              value={stats?.total_transactions.toString() ?? "0"}
              isLoading={isLoading}
            />
            <HeroItem
              title="Last Blocks"
              value={stats?.total_blocks.toString() ?? "0"}
              isLoading={isLoading}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <HeroItem
              title="Gas"
              value={`${stats?.gas_prices.average.toString() ?? "0"} Gwei`}
              isLoading={isLoading}
            />
            <HeroItem
              title="Wallet Addresses"
              value={stats?.total_addresses.toString() ?? "0"}
              isLoading={isLoading}
            />
          </div>
        </div>
      </Card>
      <Card title="Daily Transactions" className="w-full">
        <ReactApexChart
          options={charts}
          series={charts.series}
          type={"area"}
          height={200}
        />
        {/* <div className="flex flex-col w-full h-full justify-center items-center">
          <p>No Data</p>
        </div> */}
      </Card>
    </div>
  );
}
