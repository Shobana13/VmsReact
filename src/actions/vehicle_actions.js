// Actions
export const addVehicle = (vehicle) => {
    return {
      type: "ADD_VEHICLE",
      payLoad: vehicle,
    };
  };
  export const deleteVehicle = (vehicleId) => {
    return {
      type: "DELETE_VEHICLE",
      payLoad: vehicleId,
    };
  };
  export const updateVehicle = (vehicle) => {
    return {
      type: "UPDATE_VEHICLE",
      payLoad: vehicle,
    };
  };
  export const getVehicle = () => {
    return {
      type: "GET_VEHICLE",
    };
  };