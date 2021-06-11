import { actionTypes } from "../services/vehicle_Types";

const INITIAL_STATE = {
  vehicles: [],
};
const vehicle_reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_VEHICLES:
      return { ...state, vehicles: payload };
    default:
      return state;
  }
};
export default vehicle_reducer;