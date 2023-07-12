import React from 'react'

function UserComponent( {user ,showPosts}) {
    /* Кожен юзер - окрема компонента UserComponent,в якій є кнопка show posts, 
при натисканні на яку робиться state lifting, а саме - в компоненті App відображаються пости того юзера, 
на кнопку якого клікнули. */





  return (
    <div className='user'>
      <h3> user - {user.id} </h3>
      <button onClick={()=> showPosts(user.id)}>show posts</button>
    </div>
  )
}

export default UserComponent
