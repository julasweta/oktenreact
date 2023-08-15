interface Car {
  id: number;
  brand: string;
  price: number;
  year: number;
}

interface CarsState {
  cars: Car[];
  deleteTriger: boolean;
  changeCarId: number | null;
  showForm: string;
}

export enum CarsActionTypes {
  SET_ERROR = 'SET_ERROR',
  SET_CARS = 'SET_CARS',
  DELETE_TRIGER = 'DELETE_TRIGER',
  SET_CHANGE_CAR_ID = 'SET_CHANGE_CAR_ID',
  SET_SHOW_FORM = 'SET_SHOW_FORM',
}

interface SetCarsAction {
  type: typeof CarsActionTypes.SET_CARS;
  payload: Car[];
}

interface ToggleDeleteTrigerAction {
  type: typeof CarsActionTypes.DELETE_TRIGER;
}

interface SetChangeCarIdAction {
  type: typeof CarsActionTypes.SET_CHANGE_CAR_ID;
  payload: number | null;
}

interface SetShowFormAction {
  type: typeof CarsActionTypes.SET_SHOW_FORM;
  payload: string;
}

type CarsAction =
  | SetCarsAction
  | ToggleDeleteTrigerAction
  | SetChangeCarIdAction
  | SetShowFormAction;

  /**********             ****************************                       ******* */

  const initialState: CarsState = {
    cars: [], // Ваш масив об'єктів Car
    deleteTriger: true,
    changeCarId: null,
    showForm: 'add',
  };

const carsReducer = (state = initialState, action: CarsAction): CarsState => {
  switch (action.type) {
    case CarsActionTypes.SET_CARS:
      return {
        ...state,
        cars: action.payload,
      };
    case CarsActionTypes.DELETE_TRIGER:
      return {
        ...state,
        deleteTriger: !state.deleteTriger,
      };
    case CarsActionTypes.SET_CHANGE_CAR_ID:
      return {
        ...state,
        changeCarId: action.payload,
      };
    case CarsActionTypes.SET_SHOW_FORM:
      return {
        ...state,
        showForm: action.payload,
      };
    default:
      return state;
  }
};

export default carsReducer;
