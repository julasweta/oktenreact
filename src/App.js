import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Users from './components/users/Users';

function App() {
  const [users, setUsers] = useState();
  

  /* запит на https://jsonplaceholder.typicode.com/users */
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            setUsers(res.data);
        })
}, [])

  return (
    <div className="App">
      <Users users={users} />
    </div>
  );
}

export default App;
