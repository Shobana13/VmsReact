import axios from "axios";

const BOOKING_API_BASE_URL = "http://localhost:8081/api/booking";

class BookingService {
  async getAllBookings() {
    return await axios.get(BOOKING_API_BASE_URL);
  }

  async addBooking(booking) {
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

}

export default new BookingService()