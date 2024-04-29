'use client'
import { useAppSelector } from '@/app/_store/hooks'
import React from 'react'

const Profile = () => {
  let {user} = useAppSelector((state ) => state.auth)

  return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='  bg-[#fff] p-10'>
                <p>User id :- {user?.uid}</p>
                <p>User Email :- {user?.email}</p>
                <p>User Name :- {user?.name}</p>
            </div>

    </div>
  )
}

export default Profile