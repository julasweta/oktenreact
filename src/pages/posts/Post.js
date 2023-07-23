import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { apiService } from '../../services/ApiService';

const Post = () => {
    const [post, setPost] = useState();
    const params = useParams();
    const url = `https://jsonplaceholder.typicode.com/posts/${params.postId}`;


    useEffect(() => {
        const axiosGet = async () => {
            setPost(await apiService.handleGet(url));
        };
        axiosGet();
    }, []);



    return (
        <div className='item'>
            <h3> {post && post.title}</h3>
            <p> {post && post.body}</p>
        </div>
    )
}

export default Post