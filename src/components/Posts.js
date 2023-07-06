import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post';

function Posts() {
    const [posts, setPosts] = useState();
    const [post, setPost] = useState();


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                setPosts(res.data);
            })
    }, [])

    useEffect(() => {
    }, [post]);
  

    const handlePost = (id) => setPost(posts.filter(item => item.id === id))


    return (
        <div className='posts'>
            <div className='active-post'>
                <h4>АКТИВНИЙ ПОСТ</h4>
                <h2>{post && post[0].title}</h2>
                <p>{post && post[0].body}</p>
            </div>

            {posts && posts.map(item => <Post id={item.id} title={item.title} key={item.id} handlePost={handlePost} ></Post>)}

        </div>
    )
}

export default Posts;
