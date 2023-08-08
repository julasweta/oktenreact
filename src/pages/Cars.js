import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { carsActions } from "../redux/actions/carsActions";
import Car from "./Car";
import { owuBaseURl, urls } from "../constants/urls";
import AddCarForm from "../components/forms/AddCarForm";
import ChangeCarForm from "../components/ChangeCarForm";

const Cars = () => {
  const dispatch = useDispatch();
  const { cars, deleteTriger,showForm } = useSelector((store) => store.cars);

  useEffect(() => {
    const headers = {
      accept: "application/json",
    };

    axios
      .get(`${owuBaseURl + urls.owu.cars}`, { headers })
      .then((response) => {
        dispatch(carsActions.setCars(response.data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [deleteTriger]);
  console.log(showForm);

  return (<div className="cars-box">
   {showForm === 'add' &&  <AddCarForm />}
    
    {showForm === 'change' && <ChangeCarForm/> }
    
    <div className="cars">
    {cars && [...cars].reverse().map((car, index) => <Car car={car} key={index}></Car>)}


    </div>
  </div>)
}

export default Cars;
