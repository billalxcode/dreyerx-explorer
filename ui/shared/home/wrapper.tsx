import React from 'react'
import LatestBlocks from './widgets/blocks'
import LatestTransactions from './widgets/transactions'

export default function HomeWrapper() {
  return (
    <div className="flex flex-row gap-2 w-full h-[500px]">
        <LatestBlocks />
        <LatestTransactions />
    </div>
  )
}
