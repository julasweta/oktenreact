import { useEffect, useState } from 'react';
import { apiService } from '../../services/ApiService';
import User from './User';

const Users = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await apiService.handleGetUsers());
    };
    fetchUsers();

  }, [])


  return (
    <div>
      {users && users.map(user => <User user={user} key={user.id} />)}
    </div>
  )
}

export default Users;

