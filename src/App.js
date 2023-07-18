import './App.css';
import AddUserForm from './components/forms/AddUserForm';
import Users from './pages/users/Users';

function App() {
  return (
    <div className="App">
      <Users/>
      <AddUserForm/>
    </div>
  );
}

export default App;
