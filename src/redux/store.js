import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";
import carsReducer from "./reducers/carsReducer.js";


const rootReduser = combineReducers({
  cars: carsReducer,
});

const composeEnhancers = composeWithDevTools({
    trace:true,
    traceLimit:25
});
const store = createStore(rootReduser, composeEnhancers());
export default store;
