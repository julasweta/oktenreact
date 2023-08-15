import React from "react";
import {  useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form"
import { carsActions } from "../../redux/actions/carsActions";
import { useDispatch } from "react-redux";
import { carsService } from "../../services/carsServices";
import { Car } from "../../pages/Cars";

const AddCarForm = () => {
  const dispatch = useDispatch();

 type AddCar = {
    brand: string;
    price: number;
    year: number;
  }
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCar>()



  // запит на сервер на додавання нової машини
  const onSubmit: SubmitHandler<Partial<Car>> = (data) => {
    // Тут можна використовувати data, які вже є частково типізовані
    const newCar: AddCar = {
      brand: data.brand || "", // Приклад: забезпечте значення за замовчуванням
      price: data.price || 0,
      year: data.year || 0
    };
  
    carsService.addCar(newCar).then(({ data }) => {
      dispatch(carsActions.deleteTriger());
    });
  };
  

  return (
    <div className="form">
      AddCarForm
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('brand', {
            required: 'Brand is required',
            pattern: {
              value: /^[A-Za-z]+$/,
              message: 'Brand must contain only letters',
            },
          })}
          placeholder="brand"
        />

        <input
          type="text"
          {...register("price", {
            required: "Price is required",
            min: {
              value: 100,
              message: "Price must be at least 100",
            },
          })}
          placeholder="price"
        />

        <input
          type="text"
          {...register("year", {
            required: "Year is required",
            pattern: {
              value: /^\d{4}$/,
              message: "Year must contain exactly 4 digits",
            },
            min: {
              value: 1800,
              message: "Year must be at least 1800",
            },
            max: {
              value: 2023,
              message: "Year must be less than or equal to 2023",
            },
          })}
          placeholder="year"
        />

        {errors.brand && <div>{errors.brand.message}</div>}
        {errors.price && <div>{errors.price.message}</div>}
        {errors.year && <div>{errors.year.message}</div>}
        <input type="submit" value=" Додати " />
      </form>
    </div>
  )
}

export default AddCarForm;