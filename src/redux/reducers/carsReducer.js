const initialState = {
    cars: [],
    deleteTriger: true
}

export const CarsActionTypes = {
    SET_ERROR: 'SET_ERROR',
    ADD_CARS: 'ADD_CARS',
    DELETE_TRIGER: 'DELETE_TRIGER',
  }

const carsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case CarsActionTypes.ADD_CARS:
            return {
              ...state,
              cars: action.payload,
            }
            case CarsActionTypes.DELETE_TRIGER:
              return {
                ...state,
                deleteTriger: !state.deleteTriger
              }
            
        default:
            return state; // Повертаємо початковий стан для інших дій, які поки не обробляються
    }
 
}

export default carsReducer;