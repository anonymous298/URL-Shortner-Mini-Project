"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const Redirect = ({fullurl}) => {
    const router = useRouter();

    router.push(fullurl)
  return (
    <div>
      {/* Redirecting to URL... */}
    </div>
  )
}

export default Redirect
