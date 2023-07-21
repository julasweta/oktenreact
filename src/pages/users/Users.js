import { useEffect, useState } from "react";
import User from "./User"
import { apiService } from "../../services/ApiService";
import AddUserForm from "../../components/forms/AddUserForm";

const Users = () => {
  
  const [users, setUsers] = useState([]);

    /*USERS */
  // відображення всіх юзерів
  const urlUsers = "http://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchcars = async () => {
      setUsers(await apiService.handleGetCars(urlUsers));
    };
    fetchcars();
  }, [urlUsers]);

  //додавання user
  const onAddUser = async (data) => {
    console.log(users);
    console.log(data);
    await apiService.handleAddCars(data, urlUsers);
   // const updatedUsers = await apiService.handleGetCars(urlUsers);
    setUsers((users) => [...users, {id: Date.now(), name:data.name, username:data.username}]);
    console.log(users);
  };

  return (
    <div className='items'>
        <div className='items'>
        {users && users.map(user => <User user={user} key={user.id}  />)}
      </div>

      
      <AddUserForm onAddUser={onAddUser} />

    </div>
  )
}

export default Users
