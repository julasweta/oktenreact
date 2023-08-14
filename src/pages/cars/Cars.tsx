import React, { useEffect, useState } from "react";
import Car from "./Car";
import CarForm from "./CarForm";

const Cars = () => {
  interface Car {
    id: number;
    year: number;
    brand: string;
    price: number;
  }
  type Cars = Car[];
  type Id = number;

  const [cars, setCars] = useState<Cars>();
  const [id, setId] = useState<Id>(0);

  /* ------------------------------------------------------------------------------- */

  const getCar = async () => {
    try {
      const response = await fetch("http://owu.linkpc.net/carsAPI/v1/cars", {
        method: "GET",
      });
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCar();
  }, []);

  const addCar = async (brand: string, year: number, price: number) => {
    try {
      const response = await fetch("http://owu.linkpc.net/carsAPI/v1/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          brand: brand,
          price: +price,
          year: +year,
        }),
      });
      const data = await response.json();
      console.log(data);
      getCar();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCar = async (id: number) => {
    try {
      const response = await fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      });
      const data = await response.status;
      getCar();
    } catch (error) {
      console.error(error);
    }
  };

  const getForChange = (id:number)=>{
setId(id)
  }

  const changeCar = async (id: number, brand: string, year: number, price: number) => {
    try {
      const response = await fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          brand: brand,
          price: price,
          year: year,
        }),
      });
      const data = await response.json();
      console.log(data);
      getCar();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="cars">
      <CarForm addCar={addCar} changeCar={changeCar} id={id} />

      {cars && cars.map((car: Car) => <Car car={car} key={car.id} deleteCar={deleteCar} getForChange={getForChange} />)}
    </div>
  );
};

export default Cars;
