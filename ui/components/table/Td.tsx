import React from 'react'

export default function TableDataCol(props: {
    children: React.ReactNode;
    className?: string
}) {
  return (
    <td className={`px-4 py-2 border border-container-default ${props.className}`}>{ props.children }</td>
  )
}
