const payment = [
    {
      paymentId: "10001",
      paymentMode: "Online",
      paymentDate: "2021-05-01",
      paymentStatus:"Success",
    },
    {
        paymentId: "10002",
        paymentMode: "Online",
        paymentDate: "2021-05-02",
        paymentStatus:"Success",
      },
];
const paymentReducer = (state = payment, action) => {
    switch (action.type) {
      case "ADD_PAYMENT": {
        return [action.payload, ...state];
      }
      case "GET_PAYMENT": {
        return state;
      }
      case "GET_PAYMENT_BY_ID": {
        return state.filter((s) => s.id === action.payload.id);
      }
      case "DELETE_PAYMENT": {
        return state.filter((s) => s.id !== action.payload.id);
      }
      default: {
        return payment;
      }
    }
  };
  
  export default paymentReducer;