import axios from "axios";
import React from "react";
import { owuBaseURl, urls } from "../constants/urls";
import { useDispatch } from "react-redux";
import { carsActions } from "../redux/actions/carsActions";

const Car = ({ car }) => {
  const dispatch = useDispatch();

const onDeleteCar=()=>{
  const headers = {
    accept: "application/json",
  };

 axios
    .delete(`${owuBaseURl + urls.owu.cars}/${car.id}`, { headers })
    .then((response) => {
     //записуємо тригер
    dispatch(carsActions.deleteTriger());
     
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

const onChangeCar = () => {
  dispatch(carsActions.setChangeCarId(car.id))
  dispatch(carsActions.setShowForm('change'))
}

  return (
    <div className="car">
      <h2>{car.brand}</h2>
      <p>{car.price}</p>
      <p>{car.year}</p>
      <button onClick={()=>onDeleteCar()}>Delete Car</button>
      <button onClick={()=>onChangeCar()}>Change  Car</button>
    </div>
  );
};

export default Car;
