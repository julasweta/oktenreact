import { CarsActionTypes } from "../reducers/carsReducer";


export const carsActions = { 
  setCars: (data) =>  ({type: CarsActionTypes.SET_CARS, payload:data}),
  deleteTriger: ()=> ({type: CarsActionTypes.DELETE_TRIGER}),
  setShowForm: (str)=> ({type: CarsActionTypes.SHOW_FORM, payload:str}),
  setChangeCarId: (id)=> ({type: CarsActionTypes.CHANGE_CAR_ID, payload:id}),
}