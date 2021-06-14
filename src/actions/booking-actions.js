import {actionTypes} from '../services/booking_Types';
export const setbookings=(bookings)=>{
    return{
        type:actionTypes.SET_BOOKINGS,
        payload: bookings,
    };
}

export const bookedBooking=(booking)=>{
    return{
        type: actionTypes.BOOKED_BOOKINGS,
        payload: booking,
    }
}