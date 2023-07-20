import { useEffect, useState } from 'react';
import './App.css';
import { apiService } from './services/ApiService';
import AddCarForm from './components/forms/AddCarForm';
import Cars from './pages/cars/Cars';
import ChangeCarForm from './components/forms/ChangeCarForm';
import Users from './pages/users/Users';
import AddUserForm from './components/forms/AddUserForm';



function App() {
  const [cars, setCars] = useState([]);
  const [users, setUsers] = useState([]);

  // відображення всіх машин
  useEffect(() => {
    const fetchcars = async () => {
      setCars(await apiService.handleGetCars());
    };
    fetchcars();
  }, []);


  //додавання машин
  const onSubmit = async (data) => {
    const dataReq = { "brand": data.brand, "price": +data.price, "year": +data.year }
    await apiService.handleAddCars(dataReq);
    const updatedCars = await apiService.handleGetCars();
    setCars(updatedCars);
  };

  //видалення машин
  const onDelete = async (id) => {
    await apiService.handleDeleteCars(id)
    const updatedCars = await apiService.handleGetCars();
    setCars(updatedCars);
  };

  //зміна машини
  const onChange = async (data) => {
    console.log(data);
    await apiService.handleChangeCars(data)
    const updatedCars = await apiService.handleGetCars();
    setCars(updatedCars);
  };

  /* передаємо дані в форму для зміни данних  */
  const [car, setCar] = useState()
  const onOpenChangeForm = (car) => {
    setCar(car);
  }

   /*USERS */
  // відображення всіх юзерів
  const urlUsers = "http://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchcars = async () => {
      setUsers(await apiService.handleGetCars(urlUsers));
    };
    fetchcars();
  }, [urlUsers]);
  
  //додавання user
  const onAddUser = async (data) => {
    console.log(urlUsers);
    await apiService.handleAddCars(data, urlUsers);
    const updatedUsers = await apiService.handleGetCars(urlUsers);
    setUsers(updatedUsers);
  };




  return (
    <div className="App">
      <Cars cars={cars} onDelete={onDelete} onOpenChangeForm={onOpenChangeForm} />
      <div className='forms'>
        <AddCarForm onSubmit={onSubmit} />
        <ChangeCarForm onChange={onChange} car={car} />
      </div>

      <Users users={users} />
      <AddUserForm onAddUser={onAddUser} />

    </div>
  );
}

export default App;