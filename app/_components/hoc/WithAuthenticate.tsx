
'use client'
import { useAppSelector } from '@/app/_store/hooks'
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

const WithAuthenticate = (Components: React.FunctionComponent) => {
  
  return function Auth(props: any){
    const {isLoggedIn}  = useAppSelector(state => state.auth)
    useEffect(() => {
      if (!isLoggedIn) {
        redirect('/login')
      }
    }, [])

    if (!isLoggedIn) {
      redirect('/login')
    }
    return <Components {...props} />
  }
}

export default WithAuthenticate
