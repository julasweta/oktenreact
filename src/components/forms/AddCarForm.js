import axios from "axios";
import { useForm } from "react-hook-form";
import { carsActions } from "../../redux/actions/carsActions";
import { useDispatch } from "react-redux";
import { owuBaseURl, urls } from "../../constants/urls";

const AddCarForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    const data2 = {
      "brand": data.brand,
      "price": data.price,
      "year": data.year
    }


    axios.post(`${owuBaseURl + urls.owu.cars}`, data2, {
      headers: {
        'accept': 'application/json' ,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
      //записуємо тригер
      dispatch(carsActions.deleteTriger());
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }

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
        {errors.id && <div>{errors.id.message}</div>}
        <input type="submit" value=" Додати "/>
      </form>
    </div>
  )
}

export default AddCarForm;