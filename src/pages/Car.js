import React from "react";
import { useDispatch } from "react-redux";
import { carsActions } from "../redux/actions/carsActions";
import { carsService } from "../services/carsServices";

const Car = ({ car }) => {
  const dispatch = useDispatch();

  //запит на сервер на видаллення машини
  const onDeleteCar = () => {
    carsService.deleteCar(car.id).then(({ data }) => dispatch(carsActions.deleteTriger()))
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
      <button onClick={() => onDeleteCar()}>Delete Car</button>
      <button onClick={() => onChangeCar()}>Change  Car</button>
    </div>
  );
};

export default Car;
