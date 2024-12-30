import React from 'react'
import LatestBlocks from './latest/blocks'
import LatestTransactions from './latest/transactions'

export default function HomeWrapper() {
  return (
    <div className="flex flex-row gap-2 w-full h-[500px]">
        <LatestBlocks />
        <LatestTransactions />
    </div>
  )
}
