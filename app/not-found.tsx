import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
        <p className='text-3xl text-blue'>Page not found ....</p>
        <Link href="/" className='mt-2 border-b border-blue'>Return Home</Link>
    </div>
  )
}

export default NotFound