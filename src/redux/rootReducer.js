import {combineReducers} from 'redux'
//import driver_reducer from '../reducers/driver_reducer';
//import shopReducer from '../reducers/shopping_reducer'
//import productReducer from '../reducers/product_Reducer'
import userReducer from '../reducers/userReducer';
import vehicle_reducer from '../reducers/vehicle_reducer'
import driver_reducer from '../reducers/driver_reducer'
const rootReducer = combineReducers({
    user: userReducer,
    vehicle: vehicle_reducer,
    driver:driver_reducer
});
export default rootReducer;