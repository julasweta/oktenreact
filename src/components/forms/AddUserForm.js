import { useForm } from "react-hook-form";

const AddUserForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div>AddUserForm
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} placeholder="name" />

      <input {...register("username", { minLength: 2 })} placeholder="username" />


      <input type="submit" />
    </form>
    </div>
  )
}

export default AddUserForm;