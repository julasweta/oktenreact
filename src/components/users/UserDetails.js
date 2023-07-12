import React from 'react'

function UserDetails({ user }) {
    /* id,name,username,email,phone,website */
  return (
    <div className='user-details'>
        <h2> Details</h2>
        <span> id: <b>{ user.id }</b> </span>
        <span> name: <b>{ user.name }</b> </span> 
        <span> username: <b>{ user.username } </b> </span>
        <span> email: <b>{ user.email }</b> </span>
        <span> phone: <b>{ user.phone } </b></span>
        <span> website: <b>{ user.website } </b></span>
      
    </div>
  )
}

export default UserDetails
