import { CarsActionTypes } from "../reducers/carsReducer";


export const carsActions = { 
  setCars: (data) =>  ({type: CarsActionTypes.SET_CARS, payload:data}),
  deleteTriger: ()=> ({type: CarsActionTypes.DELETE_TRIGER}),
  setShowForm: (str)=> ({type: CarsActionTypes.SET_SHOW_FORM, payload:str}),
  setChangeCarId: (id)=> ({type: CarsActionTypes.SET_CHANGE_CAR_ID, payload:id}),
}