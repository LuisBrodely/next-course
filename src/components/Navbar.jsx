import React from 'react'
import Link from 'next/link'
import ActiveLink from './ActiveLink'

export default function Navbar() {
  return (
    <nav>
        <ActiveLink text='home' href='/' />
        <ActiveLink text='about' href='/about' />
        <ActiveLink text='contact' href='/contact' />
    </nav>
  )
}
