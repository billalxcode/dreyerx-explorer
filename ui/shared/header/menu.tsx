import { navigations } from '@/config/navigations'
import Link from 'next/link'
import React from 'react'

export default function HeaderMenu() {
  return (
        <ul className='flex flex-row gap-10'>
            {
                navigations.map((nav, index) => {
                    return (
                        <li className='cursor-pointer transition duration-300 hover:text-white' key={index}>
                            <Link href={nav.link} target={""}>{ nav.name }</Link>
                        </li>
                    )
                })
            }
        </ul>
  )
}
