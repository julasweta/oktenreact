import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carsActions } from "../redux/actions/carsActions";
import Car from "./Car";
import AddCarForm from "../components/forms/AddCarForm";
import ChangeCarForm from "../components/forms/ChangeCarForm";
import { carsService } from "../services/carsServices";

const Cars = () => {
  const dispatch = useDispatch();
  const { cars, deleteTriger, showForm } = useSelector((store) => store.cars);

  useEffect(() => {
    carsService.getAll().then(({ data }) => dispatch(carsActions.setCars(data)))
  }, [deleteTriger])




  return (<div className="cars-box">
    {showForm === 'add' && <AddCarForm />}
    {showForm === 'change' && <ChangeCarForm />}

    <div className="cars">
      {cars && [...cars].reverse().map((car, index) => <Car car={car} key={index}></Car>)}


    </div>
  </div>)
}

export default Cars;
