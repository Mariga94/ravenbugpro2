import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logo/logo.png'
const Logo = () => {
  return (
    <div className=''>
       <Image src='/logo/logo.png' alt='Logo' width='150' height='40' />
    </div>
  )
}

export default Logo