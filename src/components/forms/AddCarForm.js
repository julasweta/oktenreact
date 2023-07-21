import React from 'react';
import { useForm } from 'react-hook-form';

const AddCarForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onAddSubmit = async (data) => {
    await onSubmit(data);
    reset();
  };

  return (
    <div className="form">
      <h2>AddCarForm</h2>
      <form onSubmit={handleSubmit(onAddSubmit)}>
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
          {...register('price', {
            pattern: {
              value: /^\d{4}$/,
              message: 'Price must contain exactly 4 digits',
            },
          })}
          placeholder="price"
        />

        <input
          type="text"
          {...register('year', {
            pattern: {
              value: /^\d{4}$/,
              message: 'Year must contain exactly 4 digits',
            },
            min: {
              value: 1800,
              message: 'Year must be at least 1800',
            },
            max: {
              value: 2023,
              message: 'Year must be less than or equal to 2023',
            },
          })}
          placeholder="year"
        />

        {errors.brand && <div>{errors.brand.message}</div>}
        {errors.price && <div>{errors.price.message}</div>}
        {errors.year && <div>{errors.year.message}</div>}

        <input type="submit" value={'Add Car'} />
      </form>
    </div>
  );
};

export default AddCarForm;
