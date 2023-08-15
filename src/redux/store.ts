import  {Car}  from './../pages/Cars';
import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";
import carsReducer from "./reducers/carsReducer";

export interface RootState {
 cars: {cars?: Car[];
  deleteTriger?: () => void;
  showForm?: string;
  changeCarId?: number}
}

const rootReducer = combineReducers({
  cars: carsReducer,
  // інші редюсери тут, якщо потрібно
});

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25
});
const store = createStore(rootReducer, composeEnhancers());

export default store;

