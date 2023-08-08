import { Outlet } from 'react-router-dom';
import './App.css';
import AddCarForm from './components/forms/AddCarForm';

function App() {
  return (
    <div className="App">
    
    <Outlet/>
    </div>
  );
}

export default App;
