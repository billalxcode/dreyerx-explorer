import { TabTypes } from '@/hooks/useTabs'
import Link from 'next/link'
import React from 'react'

export default function TabItem(props: {
    tab: TabTypes,
    isActive: boolean
}) {
  return (
    <Link href={`?tab=${props.tab.key}`} className={`p-2 px-4 ${props.isActive ? 'text-purple-500 font-semibold' : 'text-white'} bg-container-default rounded border-border-normal`}>
        { props.tab.name }
    </Link>
  )
}
