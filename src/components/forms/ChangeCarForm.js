import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const ChangeCarForm = ({ onChange, car }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  // Встановлюємо значення полів форми з пропсів `car`
  useEffect(() => {
    if (car) {
      setValue('brand', car.brand);
      setValue('price', car.price.toString());
      setValue('year', car.year.toString());
      setValue('id', car.id.toString());
    }
  }, [car, setValue]);

  const onSubmit = async (data) => {
    await onChange(data);
    // Після відправки форми очищуємо значення полів
    setValue('brand', '');
    setValue('price', '');
    setValue('year', '');
    setValue('id', '');
  };

  return (
    <div className="form">
      <h2>ChangeCarForm</h2>
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
          {...register('price', {
            required: 'Price is required',
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
            required: 'Year is required',
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

        <input
          type="text"
          {...register('id', {
            required: 'ID is required',
          })}
          placeholder="id"
        />

        {errors.brand && <div>{errors.brand.message}</div>}
        {errors.price && <div>{errors.price.message}</div>}
        {errors.year && <div>{errors.year.message}</div>}
        {errors.id && <div>{errors.id.message}</div>}

        <input type="submit" value={'Change Car'} />
      </form>
    </div>
  );
};

export default ChangeCarForm;

