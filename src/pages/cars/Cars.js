import React, { useEffect, useState } from 'react'
import Car from './Car'
import { apiService } from '../../services/ApiService';
import AddCarForm from '../../components/forms/AddCarForm';
import ChangeCarForm from '../../components/forms/ChangeCarForm';

const Cars = () => {
  const [cars, setCars] = useState([]);

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


  return (
    <>
      <div className='items'>
        {cars && cars.map(car => <Car car={car} key={car.id} onDelete={onDelete} onOpenChangeForm={onOpenChangeForm} />)}
      </div>
      <div className='forms'>
        <AddCarForm onSubmit={onSubmit} />
        <ChangeCarForm onChange={onChange} car={car} />
      </div>
    </>
  )

}

export default Cars

