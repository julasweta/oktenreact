const initialState = {
  cars: [],
  deleteTriger: true,
  changeCarId: null,
  showForm: 'add'
}

export const CarsActionTypes = {
  SET_ERROR: 'SET_ERROR',
  SET_CARS: 'SET_CARS',
  DELETE_TRIGER: 'DELETE_TRIGER',
  SET_CHANGE_CAR_ID: 'SET_CHANGE_CAR_ID',
  SET_SHOW_FORM: 'SET_SHOW_FORM'
}

const carsReducer = (state = initialState, action) => {

  switch (action.type) {
    case CarsActionTypes.SET_CARS:
      return {
        ...state,
        cars: action.payload,
      }
    case CarsActionTypes.DELETE_TRIGER:
      return {
        ...state,
        deleteTriger: !state.deleteTriger
      }
    case CarsActionTypes.SET_CHANGE_CAR_ID:
      return {
        ...state,
        changeCarId: action.payload
      }
      case CarsActionTypes.SET_SHOW_FORM:
      return {
        ...state,
        showForm: action.payload
      }

    default:
      return state; // Повертаємо початковий стан для інших дій, які поки не обробляються
  }

}

export default carsReducer;