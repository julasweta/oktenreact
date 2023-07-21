import React, { useEffect, useState } from 'react'
import { apiService } from '../../services/ApiService';
import Post from './Post';

const Posts = ({ userId }) => {
    const [posts, setPosts] = useState([]);

    const urlPosts = "http://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        const fetchposts = async () => {
            setPosts(await apiService.handleGetCars(urlPosts));
        };
        fetchposts();
    }, []);

 


    return (
        <div className='posts'>
            
            {posts && posts
                    .filter((post) => post.userId === userId)
                    .map((itemPost, index) => <Post itemPost={itemPost} key={index}/>)}

        </div>
    )
}

export default Posts;