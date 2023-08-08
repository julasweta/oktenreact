import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { owuBaseURl, urls } from "../constants/urls";
import { carsActions } from "../redux/actions/carsActions";

const ChangeCarForm = () => {
  const dispatch = useDispatch();
  const { cars, showForm, changeCarId } = useSelector((store) => store.cars);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const car = cars.filter((car) => car.id === changeCarId);

  console.log(car);

  useEffect(() => {
    if (car[0] != null) {
      setValue("brand", car[0].brand);
      setValue("price", car[0].price.toString());
      setValue("year", car[0].year.toString());
    }
  }, [car, setValue]);

  const onChange = (data) => {
    const data2 = {
      brand: data.brand,
      price: +data.price,
      year: +data.year,
    };

    axios
      .put(`${owuBaseURl + urls.owu.cars}/${car[0].id}`, data2, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Response:", response.data);

        //записуємо тригер
        dispatch(carsActions.deleteTriger());
        dispatch(carsActions.setShowForm('add'));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className={showForm ? "change-form" : "change-form show-form"}>
      ChangeCarForm
      <form onSubmit={handleSubmit(onChange)}>
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
        {errors.id && <div>{errors.id.message}</div>}
        <input type="submit" value=" Змінити " />
      </form>
    </div>
  );
};

export default ChangeCarForm;
