import React from 'react'
import ActiveLink from './/ActiveLink'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export default function Navbar() {
  return (
    <nav>
      {menuItems.map((item, index) => (
        <ActiveLink text={item.text} href={item.href} key={index}/>
      ))}
    </nav>
  )
}
