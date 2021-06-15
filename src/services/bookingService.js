import axios from "axios";

<<<<<<< HEAD
const BOOKING_API_BASE_URL="http://localhost:8081/api/booking";

class BookingService{
    async getAllBookings(){
        return await axios.get(BOOKING_API_BASE_URL);
    }

    async addBooking(booking){
        return await axios.post(BOOKING_API_BASE_URL,booking);
    }

    async viewBooking(bookingId){
        return await axios.get(BOOKING_API_BASE_URL + "/" + bookingId);
    }

    async updateBookingDate(bookingId,booking) {
        return await axios.patch(BOOKING_API_BASE_URL + "/" + bookingId,booking);
      }
    
      async cancelBooking(bookingId) {
        return await axios.delete(BOOKING_API_BASE_URL + '/' + bookingId);
      }
      
=======
const BOOKING_API_BASE_URL = "http://localhost:8081/api/booking";

class BookingService {
  async getAllBookings() {
    return await axios.get(BOOKING_API_BASE_URL);
  }

  async addBooking(booking) {
    return await axios.post(BOOKING_API_BASE_URL, booking);
  }
  async adBooking(booking) {
    return await axios.post(BOOKING_API_BASE_URL, booking);
  }
  

  async viewBooking(bookingId) {
    return await axios.get(BOOKING_API_BASE_URL + "/" + bookingId);
  }

  async updateBookingDate(bookingId, booking) {
    return await axios.patch(BOOKING_API_BASE_URL + "/" + bookingId, booking);
  }

  async cancelBooking(bookingId) {
    return await axios.delete(BOOKING_API_BASE_URL + '/' + bookingId);
  }
  async BookingByCustomer(customerId) {
    return await axios.get(BOOKING_API_BASE_URL + '/id/' + customerId);
  }

>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
}

export default new BookingService()