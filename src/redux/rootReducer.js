import {combineReducers} from 'redux';
import bookingReducer from '../reducers/booking_Reducer';
import userReducer from '../reducers/userReducer';
const rootReducer = combineReducers({
    booking: bookingReducer,
    user: userReducer
});
export default rootReducer;