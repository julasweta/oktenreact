import React, { Component } from 'react';

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }



  getComments = () => {
    const path = window.location.pathname;
    const parts = path.split('/');
     const postId = parts[parts.length - 1];
  
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => this.setState({ comments: data }))
      .catch((error) => console.error('Error fetching comments:', error));
  };
  
  

  componentDidMount() {
    this.getComments();
  }

  render() {
    const { comments } = this.state;

    return (
      <div>
        <h2>Comments from post {comments.length> 0 && comments[0].postId}</h2>
        <ul className='items'>
          {comments.map((comment) => (
            <li key={comment.id} className='item'>
              <strong>{comment.name}</strong>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Comments;
