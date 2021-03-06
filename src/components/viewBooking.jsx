import React, { Component } from 'react';
import bookingService from '../services/bookingService';
<<<<<<< HEAD

=======
import NavBar from '../components/homepage/navbar';
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1

class ViewBooking extends Component {
    constructor(props){
        super(props)
        this.state={
            bookingId: this.props.match.params.bookingId,
            booking:{}
        }
    }

    componentDidMount(){
        bookingService.viewBooking(this.state.bookingId).then( res =>{
            this.setState({booking: res.data});
        })
    }
    
    render() { 
        return ( 
<<<<<<< HEAD
=======
            <div><NavBar/><br/><br/>
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
            <div className="card col-md-6 offset-md-3">
                <h3 className ="text-center"> View Booking Details</h3>
                <div className="card bg-info text-dark">
                <div className ="card-body">
                <h1>{this.props.match.params.bookingId}</h1>
                    <div className ="row">
                        <label><b>BookingId: </b></label>
                        <div>{this.state.booking.bookingId}</div>
                    </div>
                    <div className ="row">
                        <label><b>BookingDate:</b> </label>
                        <div>{this.state.booking.bookingDate}</div>
                    </div>
                    <div className ="row">
                        <label><b>BookedTillDate: </b></label>
                        <div>{this.state.booking.bookedTillDate}</div>
                    </div>
                    <div className ="row">
                        <label><b>BookingDescription: </b></label>
                        <div>{this.state.booking.bookingDescription}</div>
                    </div>
                    <div className="row">
                        <label><b>TotalCost: </b></label>
                        <div>{this.state.booking.totalCost}</div>
                    </div>
                    <div className="row">
                        <label><b>Distance: </b></label>
                        <div>{this.state.booking.distance}</div>
                    </div>

                </div>
                <a class="btn btn-primary" href="\booking" role="button">Back</a>    

                </div>
            </div>
         )
    }
}
 
export default ViewBooking;