import { actionTypes } from "../services/userTypes";
const INITIAL_STATE = {
  user: null,
  loggedIn: false,
  error:[]
};
const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_LOGIN:
    //case actionTypes.USER_REGISTER:
    console.log("payload",payload)
    localStorage.setItem('emailId',payload.emailId)
    localStorage.setItem('userId',payload.customerId)
    return { ...state, user: payload, loggedIn: true };
    case actionTypes.USER_REGISTER:
        return{...state, user:null, loggedIn:false}
    case actionTypes.USER_LOGOUT:
      localStorage.removeItem('emailId')
      return { ...state, user: null, loggedIn: false };
      case actionTypes.LOAD_USER:
      localStorage.getItem('emailId')
      return { ...state, user: payload, loggedIn: true };
    case actionTypes.LOGIN_FAIL:
    case actionTypes.USER_REGISTER_FAIL:
      localStorage.removeItem('emailId')
      localStorage.removeItem('userId')

      return { ...state, user: null,error:payload, loggedIn: false };
    default:
      return state;
  }
};
export default userReducer;