import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import { AppRoutes } from './Routing/AppRoutes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Link to={AppRoutes.POSTS}><button>Posts</button></Link>
          <Link to={AppRoutes.AUTO}><button>Auto</button></Link>
        </header>
        <Outlet />
      </div>
    );
  }
}

export default App;

