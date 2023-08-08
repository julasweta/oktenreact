import { CarsActionTypes } from "../reducers/carsReducer";


export const carsActions = { 
  setCars: (data) =>  ({type: CarsActionTypes.ADD_CARS, payload:data}),
  deleteTriger: ()=> ({type: CarsActionTypes.DELETE_TRIGER})
}