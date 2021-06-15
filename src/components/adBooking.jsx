import React, { Component } from 'react';
import BookingService from '../services/bookingService';
import Navbar from '../components/homepage/navbar';
import Footer from "./homepage/footer";


class AdBooking extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bookingDate: '',
            bookedTillDate: '',
        }
        this.changeBookingDateHandler = this.changeBookingDateHandler.bind(this);
        this.changeBookedTillDateHandler = this.changeBookedTillDateHandler.bind(this);
        this.saveBooking = this.saveBooking.bind(this);
    }

    saveBooking = (e) => {
        e.preventDefault();
        let booking = {bookingDate: this.state.bookingDate, bookedTillDate: this.state.bookedTillDate };
        console.log('booking => ' + JSON.stringify(booking));

        BookingService.adBooking(booking).then((res) => {
            this.props.history.push(`/bookingHome`);
        });

    }

    changeBookingDateHandler = (event) => {
        this.setState({ bookingDate: event.target.value })
    }

    changeBookedTillDateHandler = (event) => {
        this.setState({ bookedTillDate: event.target.value })
    }

    

    render() {
        return (
            <div><Navbar />
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" style={{ marginTop: "30px" }}><b>Add Booking</b></h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">

                                        <label><b>Booking Date:</b></label>
                                        <input placeholder="YYYY-MM-DD" type="date" name="BookingDate" className="form-control" value={this.state.bookingDate} onChange={this.changeBookingDateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label><b>Booked Till Date:</b></label>
                                        <input placeholder="YYYY-MM-DD" type="date" name="BookinkingTillDate" className="form-control" value={this.state.bookedTillDate} onChange={this.changeBookedTillDateHandler} />
                                    </div>
                                    <a class="btn btn-success btn-block" href="\bookingHome" role="button">Proceed</a><br/>
                                    <a class="btn btn-primary" href="\company" role="button">Back</a><br/>
                                    

                                </form><br/>
                                

                            </div>
                        </div>
                       
                    </div>
                </div><br/><br/><br/><br/>
                <Footer />
            </div>
        )
    }
}

export default AdBooking;
//<button className="btn btn-success btn-block" onClick={this.saveBooking}> Save</button><br/><br/>