'use client';
import Card from '@/ui/components/card/card';
import React, { useEffect } from 'react';
import HeroItem from './item';
import useStats from '@/hooks/stats/useStats';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});
import { ApexOptions } from 'apexcharts';
import useStatsChartTxs from '@/hooks/stats/useStatsChartTxs';
import CardEmptyData from '@/ui/components/card/empty';
import { GrPieChart, GrTransaction } from 'react-icons/gr';
import { HiOutlineCube } from 'react-icons/hi';
import { IoWalletOutline } from 'react-icons/io5';
import { BiGasPump } from 'react-icons/bi';
import { FaDollarSign } from 'react-icons/fa6';
import useMarketOverview from '@/hooks/market/useMarketOverview';

export default function HeroSection() {
    const { stats, handleFetchStats, isLoading } = useStats();
    const {
        handleFetchChartTxs,
        labels,
        transactionCounts,
        isLoading: isChartLoading,
    } = useStatsChartTxs();
    const {
        data: marketData,
        isLoading: marketLoading,
        handleFetchMarketOverview,
    } = useMarketOverview()

    const chartOptions: ApexOptions = {
        series: [
            {
                name: 'TRANSACTIONS',
                data: transactionCounts,
            },
        ],
        chart: {
            type: 'area',
            zoom: {
                enabled: false,
            },
            background: 'transparent',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            colors: ['#FBD2B2'], // Ubah warna garis di sini
        },
        labels: labels,
        xaxis: {
            type: 'datetime',
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
            mode: 'dark',
        },
        grid: {
            show: false,
        },
    };

    useEffect(() => {
        handleFetchStats();
        handleFetchChartTxs();
        handleFetchMarketOverview()
    }, [handleFetchStats, handleFetchChartTxs, handleFetchMarketOverview]);

    return (
        <div className="flex flex-col lg:flex-row gap-2 w-full">
            <Card title='Market ETH Overview' className="w-full">
                <div className="flex flex-col mt-2 gap-2">
                    <HeroItem 
                        icon={
                            <FaDollarSign />
                        }
                        title='Price'
                        prefixValue='$'
                        value={marketData?.usd.toFixed(5) ?? "0"}
                        isLoading={marketLoading}
                    />
                    <HeroItem 
                        icon={
                            <GrPieChart />
                        }
                        title='Marketcap'
                        prefixValue='$'
                        value={marketData?.usd_market_cap.toFixed(2) ?? '0'}
                        isLoading={marketLoading}
                    />
                </div>
            </Card>
            <Card title="Network Info" className="w-full">
                <div className="flex flex-row mt-2 gap-2">
                    <div className="flex flex-col gap-2 w-full h-full">
                        <HeroItem
                            icon={<GrTransaction />}
                            title="Transactions"
                            value={stats?.total_transactions.toString() ?? '0'}
                            isLoading={isLoading}
                        />
                        <HeroItem
                            icon={<HiOutlineCube />}
                            title="Last Blocks"
                            value={stats?.total_blocks.toString() ?? '0'}
                            isLoading={isLoading}
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full h-full">
                        <HeroItem
                            icon={<BiGasPump />}
                            title="Gas"
                            value={`${stats?.gas_prices.average?.toString() ?? '0'} Gwei`}
                            isLoading={isLoading}
                        />
                        <HeroItem
                            icon={<IoWalletOutline />}
                            title="Accounts"
                            value={stats?.total_addresses?.toString() ?? '0'}
                            isLoading={isLoading}
                        />
                    </div>
                </div>
            </Card>
            <Card title="Daily Transactions" className="w-full">
                {isChartLoading ? (
                    <CardEmptyData />
                ) : (
                    <ReactApexChart
                        options={chartOptions}
                        series={chartOptions.series}
                        height={180}
                    />
                )}
            </Card>
        </div>
    );
}
