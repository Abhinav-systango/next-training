import React from 'react'
import Skeleton from 'react-loading-skeleton'

const loading = () => {
  return (
    <div className='h-screen flex justify-center items-center'><Skeleton /></div>
  )
}

export default loading