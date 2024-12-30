import React from 'react'

export default function Container(props: {
    children: React.ReactNode
}) {
  return (
    <div className="min-h-screen w-screen px-8 py-8 flex flex-col gap-4">
      {props.children}
    </div>
  )
}
