import React from 'react'

export default function DarkLayout({ children }) {
  return (
    <div className=' bg-red-200 rounded'>
			<h2>Dark Layout</h2>
      { children }
    </div>
  )
}

