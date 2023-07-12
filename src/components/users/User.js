import React from 'react'
import UserDetails from './UserDetails'
import UserAddress from './UserAddress'
import Company from './Company'

function User({ user }) {
  return (
    <div className = 'user'>
        <UserDetails user={ user }/>
        <UserAddress address={ user.address }/>
        <Company company={ user.company }/>
      
    </div>
  )
}

export default User
