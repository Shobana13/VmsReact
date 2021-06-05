const vehicle = [
    {
        vehicleId:"103",
        vehicleNumber:"TN 02 3223",
        type: 'car',
        category:'a/c',
        description:'good',
        location:'chennai',
        capacity:'6',
        chargesPerKM:'2.0',
        fixedCharges:'2.0'
    },
    {
        vehicleId:"102",
        vehicleNumber:"TN 02 2222",
        type: 'car',
        category:'a/c',
        description:'fast',
        location:'chennai',
        capacity:'6',
        chargesPerKM:'2.0',
        fixedCharges:'2.0'
    },
];
const vehicleReducer = (state = vehicle, action) => {
    switch (action.type) {
      case "ADD_VEHICLE": {
        return [action.payload, ...state];
      }
      case "GET_VEHICLE": {
        return state;
      }
      case "GET_VEHICLE_BY_ID": {
        return state.filter((s) => s.id === action.payload.id);
      }
      case "DELETE_VEHICLE": {
        return state.filter((s) => s.id !== action.payload.id);
      }
      default: {
        return vehicle;
      }
    }
  };
  
  export default vehicleReducer;