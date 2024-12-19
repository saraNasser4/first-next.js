import Link from 'next/link'
import React from 'react'

const Users = () => {
  return (
    <>
        <div>Users</div>
        <Link href='users/1'>User one</Link>
        <Link href='users/2'>User two</Link>
        <Link href='users/3'>User three</Link>
        <Link href='users/4'>User four</Link>
        <Link href='users/5'>User five</Link>
    </>
    
  )
}

export default Users