import React, { Component } from 'react';
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
//import { setBookings } from "../../actions/booking_actions";
//import booking_reducer from "../../reducers/booking_Reducer";
//import booking_Types from "../../BookingService/booking_Types";
import BookingService from '../services/bookingService';
import Navbar from '../components/homepage/navbar';


//const { useEffect } = React;

//const axios = require("axios");

class AdBooking extends Component {

    constructor(props){
        super(props)
        this.state = {
            bookingId:this.props.match.params.bookingId,
            bookingDate:'',
            bookedTillDate: '',
        }
        this.changeBookingDateHandler=this.changeBookingDateHandler.bind(this);
        this.changeBookedTillDateHandler=this.changeBookedTillDateHandler.bind(this);
        this.saveBooking=this.saveBooking.bind(this);
        this.changeBookingIdHandler=this.changeBookingIdHandler.bind(this);
    }

    saveBooking = (e) => {
        e.preventDefault();
        let booking={bookingId:this.state.bookingId, bookingDate: this.state.bookingDate, bookedTillDate: this.state.bookedTillDate};
        console.log('booking => '+ JSON.stringify(booking));

        BookingService.addBooking(booking).then((res) => {
              this.props.history.push(`/booking`);
        });

    }

    changeBookingIdHandler=(event) =>{
        this.setState({bookingId: event.target.value})
    }

    changeBookingDateHandler=(event) =>{
        this.setState({bookingDate: event.target.value})
    }

    changeBookedTillDateHandler=(event) =>{
        this.setState({bookedTillDate: event.target.value})
    }

    cancel(){
        this.props.history.push('/booking');
    }
    
    render() { 
        return (  
            <div>
                <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Booking</h3>
                            <div className="card-body">
                                <form>                              
                                    <div className="form-group">
                                        <label><b>BookningId:</b></label>
                                        <input placeholder="Id" name="BookingId" className="form-control" value={this.state.bookingId} onChange={this.changeBookingIdHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label><b>Booking Date:</b></label>
                                        <input placeholder="BookingDate" name="BookingDate" className="form-control" value={this.state.bookingDate} onChange={this.changeBookingDateHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label><b>Booked Till Date:</b></label>
                                        <input placeholder="BookingTillDate" name="BookinkingTillDate" className="form-control" value={this.state.bookedTillDate} onChange={this.changeBookedTillDateHandler}/>
                                    </div>
                                   
                                   
                                    <button className="btn btn-success" onClick={this.saveBooking}> Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                                </form>
                            
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
 
export default AdBooking;
