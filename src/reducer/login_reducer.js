const loginReducer = (state = false, action) => {
    switch (action.type) {
      case "LOGGED_IN":
        return !state;
      case "LOGGED_OUT":
        return false;
      default:
        return state;
    }
  };
  
  export default loginReducer;