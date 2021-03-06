import React, { Component } from "react";
import BookingService from "../services/bookingService";
import NavBar from '../components/homepage/navbar'

class Booking extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookings: []
<<<<<<< HEAD
  
=======

        }
        //this.viewBooking = this.viewBooking.bind(this);
        this.addBooking = this.addBooking.bind(this);
        this.adBooking = this.adBooking.bind(this);
        this.updateBookingDate = this.updateBookingDate.bind(this);
        this.cancelBooking = this.cancelBooking.bind(this);
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
    }
    //this.viewBooking = this.viewBooking.bind(this);
    this.addBooking=this.addBooking.bind(this);
    this.updateBookingDate=this.updateBookingDate.bind(this);
    this.cancelBooking = this.cancelBooking.bind(this);
}


state = {
    bookings: [],
    sortColumn: { path: "title", order: "asc" },
    search: "",
};


    componentDidMount() {
        BookingService.getAllBookings().then((res) => {
            console.log("data: ", res.data);
            this.setState({ bookings: res.data });
        });
        console.log("bookings: ", this.state.booking);
    }
    addBooking(){
        this.props.history.push('/add-booking');
    }
<<<<<<< HEAD
    updateBookingDate(bookingId){
=======
    adBooking() {
        this.props.history.push('/ad-booking');
    }
    updateBookingDate(bookingId) {
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
        this.props.history.push(`/update-booking/${bookingId}`);
    }
    cancelBooking(bookingId){
        BookingService.cancelBooking(bookingId).then((res) => {
            this.setState({bookings:this.state.bookings.filter(booking => booking.bookingId !== bookingId)});
        });
    }
    viewBooking(bookingId){
        this.props.history.push(`/view-booking/${bookingId}`);
    };
    render() {
        return (
            <div>
<<<<<<< HEAD
                <Navbar/><br/><br/><br/><br/>
=======
                <NavBar /><br /><br /><br /><br />
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
                <div className="container">
                <h2 className="text-center">Booking List</h2>
                <div className="row">
                    <button style={{marginDown:"5px"}} className="btn-right btn-info btn-lg mb-3" onClick={this.addBooking}>Add Booking</button>
                    </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Booking bookingId</th>
                                <th>Booking bookingDate</th>
                                <th>Booking bookedTillDate</th>
                                <th>Booking bookingDescription</th>
                                <th>Booking totalCost</th>
                                <th>Booking distance</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.bookings.map(
                                    booking =>
                                        <tr key={booking.bookingId}>
                                            <td>{booking.bookingId}</td>
                                            <td>{booking.bookingDate}</td>
                                            <td>{booking.bookedTillDate}</td>
                                            <td>{booking.bookingDescription}</td>
                                            <td>{booking.totalCost}</td>
                                            <td>{booking.distance}</td>
                                            <td>
                                            <button onClick = {() => this.viewBooking(booking.bookingId)} className = "btn btn-primary ml-2">View</button>
                                            <button  style={{marginLeft:"10px"}} onClick = {() => this.updateBookingDate(booking.bookingId)} className="btn btn-success">Update</button>
                                            <button onClick={() => this.cancelBooking(booking.bookingId)} className="btn btn-danger ml-2">Delete</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <a class="btn btn-primary" href="\admin-components" role="button">Back</a> 
            </div>
        </div>
        );
    }

}
export default Booking;
