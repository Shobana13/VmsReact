// Actions
export const addPayment = (payment) => {
    return {
      type: "ADD_PAYMENT",
      payLoad: payment,
    };
  };
  export const cancelPayment = (paymentId) => {
    return {
      type: "DELETE_PAYMENT",
      payLoad: paymentId,
    };
  };
  export const updatePayment = (payment) => {
    return {
      type: "UPDATE_PAYMENT",
      payLoad: payment,
    };
  };
  export const getPayment = () => {
    return {
      type: "GET_PAYMENT",
    };
  };
  