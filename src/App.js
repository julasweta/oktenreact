import { useEffect, useState } from 'react';
import './App.css';
import UsersComponent from './components/UsersComponent';
import axios from 'axios';

function App() {
  const [id, setId] = useState(0);
  const showPosts = (id) => {
    setId(id);
  };

  useEffect(() => { }, [id]);

  const [posts, setPosts] = useState();


useEffect(() => {
  axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(res => {
          setPosts(res.data);
      })
}, [id])

  


  return (
    <div className="App">
      <h3>User Posts </h3>
     <div className='posts'> {posts && posts.map(post =>  <h4 className='post'>{post.title}</h4>)}</div>
    
     
      <UsersComponent showPosts={showPosts} />
    </div>
  );
}

export default App;
