import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <>
        <div>Hello Dashboard</div>
        <Link href='dashboard/users'>Found Users</Link>
    </>
  )
}

export default Dashboard