import React from 'react'

const User = ({ params }: { params: { id: number }}) => {
    const { id } = params
  return (
    <div>User {id}</div>
  )
}

export default User