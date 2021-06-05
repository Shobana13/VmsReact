import counterReducer from "./counter_reducer";
import loginReducer from "./login_reducer";
import paymentReducer from "./payment_reducer";
import { combineReducers } from "redux";

// combine all reducers using combinerReducer
const allReducers = combineReducers({
  counter: counterReducer,
  login: loginReducer,
  payment: paymentReducer,
});

export default allReducers;