import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserComponent from './UserComponent';


function UsersComponent({showPosts}) {
    const [users, setUsers] = useState();

    /* запит на https://jsonplaceholder.typicode.com/users */
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            setUsers(res.data);
        })
}, [])
// showPosts= {showPosts}

  return (
    <div>
      { users && users.map(user=> <UserComponent user= {user} showPosts= {showPosts} key={user.id}/>)} 
    </div>
  )
}

export default UsersComponent
