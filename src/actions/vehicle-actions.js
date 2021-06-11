import { actionTypes } from "../services/vehicle_Types";
export const setvehicles = (vehicles) => {
  return {
    type: actionTypes.SET_VEHICLES,
    payload: vehicles,
  };
};

export const selectedVehicle = (vehicle) => {
  return {
    type: actionTypes.SELECTED_VEHICLE,
    payload: vehicle,
  };
};