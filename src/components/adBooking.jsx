import React, { Component } from 'react';
import BookingService from '../services/bookingService';
import Navbar from '../components/homepage/navbar';
<<<<<<< HEAD


//const { useEffect } = React;

//const axios = require("axios");

=======
import Footer from "./homepage/footer";


>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
class AdBooking extends Component {

    constructor(props){
        super(props)
        this.state = {
<<<<<<< HEAD
            bookingId:this.props.match.params.bookingId,
            bookingDate:'',
=======
            bookingDate: '',
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
            bookedTillDate: '',
        }
        this.changeBookingDateHandler=this.changeBookingDateHandler.bind(this);
        this.changeBookedTillDateHandler=this.changeBookedTillDateHandler.bind(this);
        this.saveBooking=this.saveBooking.bind(this);
        this.changeBookingIdHandler=this.changeBookingIdHandler.bind(this);
    }

    saveBooking = (e) => {
        e.preventDefault();
<<<<<<< HEAD
        let booking={bookingId:this.state.bookingId, bookingDate: this.state.bookingDate, bookedTillDate: this.state.bookedTillDate};
        console.log('booking => '+ JSON.stringify(booking));

        BookingService.addBooking(booking).then((res) => {
              this.props.history.push(`/booking`);
=======
        let booking = {bookingDate: this.state.bookingDate, bookedTillDate: this.state.bookedTillDate };
        console.log('booking => ' + JSON.stringify(booking));

        BookingService.adBooking(booking).then((res) => {
            this.props.history.push(`/bookingHome`);
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
        });

    }

<<<<<<< HEAD
    changeBookingIdHandler=(event) =>{
        this.setState({bookingId: event.target.value})
    }

    changeBookingDateHandler=(event) =>{
        this.setState({bookingDate: event.target.value})
=======
    changeBookingDateHandler = (event) => {
        this.setState({ bookingDate: event.target.value })
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
    }

    changeBookedTillDateHandler=(event) =>{
        this.setState({bookedTillDate: event.target.value})
    }

<<<<<<< HEAD
    cancel(){
        this.props.history.push('/booking');
    }
    
    render() { 
        return (  
            <div>
                <Navbar/>
=======
    

    render() {
        return (
            <div><Navbar />
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" style={{ marginTop: "30px" }}><b>Add Booking</b></h3>
                            <div className="card-body">
<<<<<<< HEAD
                                <form>                              
                                    <div className="form-group">
                                        <label><b>BookningId:</b></label>
                                        <input placeholder="Id" name="BookingId" className="form-control" value={this.state.bookingId} onChange={this.changeBookingIdHandler}/>
                                    </div>
                                    <div className="form-group">
=======
                                <form>
                                    <div className="form-group">

>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
                                        <label><b>Booking Date:</b></label>
                                        <input placeholder="YYYY-MM-DD" type="date" name="BookingDate" className="form-control" value={this.state.bookingDate} onChange={this.changeBookingDateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label><b>Booked Till Date:</b></label>
<<<<<<< HEAD
                                        <input placeholder="BookingTillDate" name="BookinkingTillDate" className="form-control" value={this.state.bookedTillDate} onChange={this.changeBookedTillDateHandler}/>
                                    </div>
                                   
                                   
                                    <button className="btn btn-success" onClick={this.saveBooking}> Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                                </form>
                            
=======
                                        <input placeholder="YYYY-MM-DD" type="date" name="BookinkingTillDate" className="form-control" value={this.state.bookedTillDate} onChange={this.changeBookedTillDateHandler} />
                                    </div>
                                    <a class="btn btn-success btn-block" href="\bookingHome" role="button">Proceed</a><br/>
                                    <a class="btn btn-primary" href="\company" role="button">Back</a><br/>
                                    

                                </form><br/>
                                

>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
                            </div>
                        </div>
                       
                    </div>
<<<<<<< HEAD
                </div>

=======
                </div><br/><br/><br/><br/>
                <Footer />
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
            </div>
        )
    }
}
 
export default AdBooking;
//<button className="btn btn-success btn-block" onClick={this.saveBooking}> Save</button><br/><br/>