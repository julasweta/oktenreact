//import React, { useState } from 'react';
import User from './User';

function Users({ users }) {
   // const [user, setUser] = useState();

    return (
        <div className='users'>
            {users && users.map(user => <User user={user} key={user.id} />)}
        </div>
    )
}

export default Users
