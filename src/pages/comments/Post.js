import React, { useEffect, useState } from 'react'
import { apiService } from '../../services/ApiService';
import AddCommentForm from './AddCommentForm';

const Post = ({ itemPost }) => {
    const [comments, setComments] = useState([]);

    const urlComments = "http://jsonplaceholder.typicode.com/comments";

    useEffect(() => {
        const fetchcomments = async () => {
            const allComents = await apiService.handleGetCars(urlComments);
            const postComments = allComents.filter(comment => comment.postId === itemPost.id)
            setComments(postComments);
        };
        fetchcomments();
    }, []);

   
    return (
        <div className='post'>
            <h4>{itemPost.title}</h4> <br />
            <div className='comments'>
                <h5>Comments</h5>
                <ol>{comments.map((comment, index)=> <li key={index} >{comment.name}</li>)}</ol>
            </div>

<AddCommentForm idPost={itemPost.id} setComments={setComments} comments={comments} />
           
        </div>
    )
}

export default Post