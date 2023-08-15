import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store"; // Імпортуємо RootState

import { carsActions } from "../redux/actions/carsActions";
import AddCarForm from "../components/forms/AddCarForm";
import ChangeCarForm from "../components/forms/ChangeCarForm";
import { carsService } from "../services/carsServices";
import CarComponent from "./Car";

export type Car = {
  id: number;
  brand: string;
  price: number;
  year: number;
};

export type CarsUseState = {
  cars: Car[] | undefined;
  deleteTriger?: () => void;
  showForm?: string;
};

const Cars: React.FC = () => {
  const dispatch = useDispatch();

  const cars = useSelector((state: Partial<RootState>) => state.cars?.cars);
  const deleteTriger = useSelector((state: Partial<RootState>) => state.cars?.deleteTriger);
  const showForm = useSelector((state: Partial<RootState>) => state.cars?.showForm);

  useEffect(() => {
    carsService.getAll().then(({ data }) => dispatch(carsActions.setCars(data)));
  }, [deleteTriger, dispatch]);

  return (
    <div className="cars-box">
      CARS
      {showForm === "add" && <AddCarForm />}
      {showForm === "change" && <ChangeCarForm />}
      {
        <div className="cars">
          {cars &&
            cars
              .slice()
              .reverse()
              .map((car: Car, index) => <CarComponent car={car} key={index} />)}
        </div>
      }
    </div>
  );
};

export default Cars;
