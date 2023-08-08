import axios from "axios";
import { useForm } from "react-hook-form";
import { carsActions } from "../../redux/actions/carsActions";
import { useDispatch } from "react-redux";

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


    axios.post('http://owu.linkpc.net/carsAPI/v1/cars', data2, {
      headers: {
        'accept': 'application/json' ,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    //записуємо тригер
    dispatch(carsActions.deleteTriger());
  }

  return (
    <div>AddCarForm
      <form onSubmit={handleSubmit(onSubmit)}>

        <input {...register("brand", { required: true })} placeholder="brand" />
        <input {...register("price", { minLength: 2 })} placeholder="price" />
        <input {...register("year", { minLength: 2 })} placeholder="year" />
        <input type="submit" />
      </form>
    </div>
  )
}

export default AddCarForm;