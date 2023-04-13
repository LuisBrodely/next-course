import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

interface Props {
  text: string
  href: string
}

export default function ActiveLink({ text, href }: Props) {

    const { asPath } = useRouter()
    // console.log(asPath)

  return (
    <Link 
      href={href} 
      style={asPath === href ? {color:'red'} : undefined}
      className='px-4'
    >
      { text }
    </Link>
  )
}
