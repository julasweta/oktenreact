import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { carsActions } from "../redux/actions/carsActions";
import Car from "./Car";
import { owuBaseURl, urls } from "../constants/urls";

const Cars = () => {
  const dispatch = useDispatch();
  const { cars, deleteTriger } = useSelector((store) => store.cars);
 

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

  return( <div className="cars">
    {cars && cars.map((car,index) => <Car car={car} key={index}></Car>)}
    </div>)
}

export default Cars;
