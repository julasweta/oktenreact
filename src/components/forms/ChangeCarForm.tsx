import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { carsActions } from "../../redux/actions/carsActions";
import { carsService } from "../../services/carsServices";
import { RootState } from "../../redux/store";
import { Car } from "../../pages/Cars";
import type { SubmitHandler } from "react-hook-form";



const ChangeCarForm = () => {
  const dispatch = useDispatch();


  const cars = useSelector((state: Partial<RootState>) => state.cars?.cars);
  const showForm = useSelector((state: Partial<RootState>) => state.cars?.showForm);
  const changeCarId = useSelector((state: Partial<RootState>) => state.cars?.changeCarId);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Partial<Car>>();

  const car = cars?.filter((car: Car) => car.id === changeCarId)[0];

  useEffect(() => {
    if (car) {
      setValue("brand", car.brand);
      setValue("price", car.price);
      setValue("year", car.year);
    }
  }, [car, setValue]);
  
  
  

  const onChange: SubmitHandler<Partial<Car>> = (data) => {
    const data2 = {
      brand: data.brand,
      price: Number(data.price) || 0,
      year: Number(data.year) || 0,
    };

    if (car) {
      carsService
        .changeCar(data2, car.id)
        .then(({ data }) => {
          dispatch(carsActions.deleteTriger());
          dispatch(carsActions.setShowForm("add"));
        });
    }
  };

  return (
    <div className={showForm ? "change-form" : "change-form show-form"}>
      ChangeCarForm
      <form onSubmit={handleSubmit(onChange)}>
        <input
          type="text"
          {...register("brand", {
            required: "Brand is required",
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Brand must contain only letters",
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
        <input type="submit" value=" Змінити " />
      </form>
    </div>
  );
};

export default ChangeCarForm;

