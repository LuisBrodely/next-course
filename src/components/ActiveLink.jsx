import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
const style = {
    color: 'red'
}

export default function ActiveLink({ text, href }) {

    const { asPath } = useRouter()
    // console.log(asPath)

  return (
    <Link 
      href={href} 
      style={asPath === href ? {color:'red'} : null}
      className='px-4'
    >
      { text }
    </Link>
  )
}
