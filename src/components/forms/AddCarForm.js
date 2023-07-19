import { useForm } from "react-hook-form";

const AddCarForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm();

const onAddSubmit = async(data) => {
 await onSubmit(data);
 reset();
}

  return (
    <div className="form">
      <h2>AddCarForm</h2>
      <form onSubmit={handleSubmit(onAddSubmit)}>
        <input type="text" {...register("brand", { required: true })} placeholder="brand" />
        <input type="text" {...register("price")} placeholder="price" />
        <input type="text" {...register("year")} placeholder="year" />


        <input type="submit" value={'Add Car'} />
      </form >
    </div >
  )
}

export default AddCarForm;