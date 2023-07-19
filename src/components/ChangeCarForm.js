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
        <input type="text" {...register('brand')} placeholder="brand" />
        <input type="text" {...register('price', { required: true })} placeholder="price" />
        <input type="text" {...register('year')} placeholder="year" />
        <input type="text" {...register('id')} placeholder="id" />

        {errors.price && <div>This field is required</div>}
        <input type="submit" value={'Change Car'} />
      </form>
    </div>
  );
};

export default ChangeCarForm;
