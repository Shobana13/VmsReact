import { actionTypes } from "../services/driver_Types";
export const setdrivers = (drivers) => {
  return {
    type: actionTypes.SET_DRIVERS,
    payload: drivers,
  };
};

export const selectedDriver = (driver) => {
  return {
    type: actionTypes.SELECTED_DRIVER,
    payload: driver,
  };
};