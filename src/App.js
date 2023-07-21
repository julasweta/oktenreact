import { useState } from 'react';
import './App.css';
import Cars from './pages/cars/Cars';
import Comments from './pages/comments/Posts';
import Users from './pages/users/Users';



function App() {
  const [showCars, setShowCars] = useState(false);
  const [showUsers, setShowUsers] = useState(false);


  return (
    <div className="App">
      <div className='show-butt'>
        <button onClick={() => setShowCars(!showCars)}>Show Cars</button>
        <button onClick={() => setShowUsers(!showUsers)}>Show Users</button></div>
      {showCars && <Cars />}
      {showUsers && <Users />}
    

    </div>
  );
}

export default App;