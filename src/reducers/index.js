import counterReducer from "./counter_reducer";
//import loginReducer from "./login_reducer";
//import vehicleReducer from "./vehicle_reducer";
import { combineReducers } from "redux";

// combine all reducers using combinerReducer
const allReducers = combineReducers({
  counter: counterReducer,
  
});

export default allReducers;