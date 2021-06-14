import{actionTypes} from '../services/booking_Types'

const INITIAL_STATE={
    bookings:[],
};
const booking_reducer =(state= INITIAL_STATE,{type,payload})=>{
    switch(type){
        case actionTypes.SET_BOOKINGS:
            return {...state,bookings:payload};
            default:
                return state;
    }
}
export default booking_reducer;