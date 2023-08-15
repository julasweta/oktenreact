import { CarsActionTypes } from "../reducers/carsReducer";
import { Car } from "../../pages/Cars"



export const carsActions = { 
  setCars: (data:Car) =>  ({type: CarsActionTypes.SET_CARS, payload:data}),
  deleteTriger: ()=> ({type: CarsActionTypes.DELETE_TRIGER}),
  setShowForm: (str:string)=> ({type: CarsActionTypes.SET_SHOW_FORM, payload:str}),
  setChangeCarId: (id:number)=> ({type: CarsActionTypes.SET_CHANGE_CAR_ID, payload:id}),
}