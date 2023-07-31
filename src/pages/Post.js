import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Post extends Component {
constructor(props) {
  super(props)

}


  render() {
   const post = this.props.post;

    return (
      <div className='item'>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <span><b>userId:</b> {post.userId}</span>
        <Link to={`/comments/${post.id}`}>Comments</Link>
      </div>
    )
  }
}

export default Post
