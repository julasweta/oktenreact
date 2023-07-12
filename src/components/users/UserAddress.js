import React from 'react'

function UserAddress({address}) {
    /*street suite city */
  return (
    <div className='user-address'>
          <h2>Address</h2>
          <span> street: <b>{address.street}</b> </span>
          <span> suite: <b>{address.suite} </b></span>
          <span> city: <b>{address.city} </b></span>
    </div>
  )
}

export default UserAddress
