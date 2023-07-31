import React, { Component } from 'react';
import Post from './Post';
import "../App.css"

export class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json()) 
      .then((data) => this.setState({ posts: data })) 
      .catch((error) => console.log('Error:', error));
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
  
    return <div className='items'>{this.state.posts.map(post=><Post post={post} key={post.id}/>)}</div>;
  }
}

export default Posts;
