import React from "react";

interface CarProps {
  car: {
    id: number;
    brand: string;
    price: number;
    year: number;
  };
  deleteCar: (id: number) => void;
}

const Car = ({ car, deleteCar }: CarProps) => {
  return (
    <div className="car">
      <div>id - {car && car.id}</div>
      <div>brand - {car && car.brand}</div>
      <div>price - {car && car.price}</div>
      <div>year - {car && car.year}</div>
      <button onClick={() => deleteCar(car.id)}> delete </button>
    </div>
  );
};

export default Car;
