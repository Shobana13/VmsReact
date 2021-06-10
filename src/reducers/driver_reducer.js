import { actionTypes } from "../services/driver_Types";

const INITIAL_STATE = {
  drivers: [],
};
const driver_reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_DRIVERS:
      return { ...state, drivers: payload };
    default:
      return state;
  }
};
export default driver_reducer;