import React, { Component } from 'react';
import BookingService from '../services/bookingService';


class AddBooking extends Component {

    constructor(props){
        super(props)
        this.state = {
            bookingId:this.props.match.params.bookingId,
            bookingDate:'',
            bookedTillDate: '',
            bookingDescription:'',
            totalCost:'',
            distance:'',
        }
<<<<<<< HEAD
        this.changeBookingDateHandler=this.changeBookingDateHandler.bind(this);
        this.changeBookedTillDateHandler=this.changeBookedTillDateHandler.bind(this);
        this.changeBookingDescriptionHandler=this.changeBookingDescriptionHandler.bind(this);
        this.changeBookingTotalCostHandler=this.changeBookingTotalCostHandler.bind(this);
        this.changeBookingDistanceHandler=this.changeBookingDistanceHandler.bind(this);
        this.saveBooking=this.saveBooking.bind(this);
        this.changeBookingIdHandler=this.changeBookingIdHandler.bind(this);
=======
        this.changeBookingDateHandler = this.changeBookingDateHandler.bind(this);
        this.changeBookedTillDateHandler = this.changeBookedTillDateHandler.bind(this);
        this.changeBookingDescriptionHandler = this.changeBookingDescriptionHandler.bind(this);
        this.changeBookingTotalCostHandler = this.changeBookingTotalCostHandler.bind(this);
        this.changeBookingDistanceHandler = this.changeBookingDistanceHandler.bind(this);
        this.saveBooking = this.saveBooking.bind(this);
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
    }

    saveBooking = (e) => {
        e.preventDefault();
<<<<<<< HEAD
        let booking={bookingId:this.state.bookingId, bookingDate: this.state.bookingDate, bookedTillDate: this.state.bookedTillDate,bookingDescription: this.state.bookingDescription,totalCost: this.state.totalCost,distance: this.state.distance};
        console.log('booking => '+ JSON.stringify(booking));
=======
        let booking = {bookingDate: this.state.bookingDate, bookedTillDate: this.state.bookedTillDate, bookingDescription: this.state.bookingDescription, totalCost: this.state.totalCost, distance: this.state.distance };
        console.log('booking => ' + JSON.stringify(booking));
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1

        BookingService.addBooking(booking).then((res) => {
              this.props.history.push(`/booking`);
        });

    }

<<<<<<< HEAD
    changeBookingIdHandler=(event) =>{
        this.setState({bookingId: event.target.value})
    }
=======
   
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1

    changeBookingDateHandler=(event) =>{
        this.setState({bookingDate: event.target.value})
    }

    changeBookedTillDateHandler=(event) =>{
        this.setState({bookedTillDate: event.target.value})
    }

    changeBookingDescriptionHandler=(event) =>{
        this.setState({bookingDescription: event.target.value})
    }

<<<<<<< HEAD
=======

    changeBookingTotalCostHandler = (event) => {
        this.setState({ bookingDescription: event.target.value })
    }


   
  changeBookingDistanceHandler = (event) => {
        this.setState({ distance: event.target.value })
    }


>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
    changeBookingDistanceHandler=(event) =>{
        this.setState({distance: event.target.value})
    }

    changeBookingTotalCostHandler=(event) =>{
        this.setState({totalCost: event.target.value})
    }
    cancel(){
        this.props.history.push('/booking');
    }
    
    render() { 
        return (  
            <div>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" style={{marginTop:"30px"}}><b>Add Booking</b></h3>
                            <div className="card-body">
                                <form>                              
                                    <div className="form-group">
<<<<<<< HEAD
                                        <label><b>BookningId:</b></label>
                                        <input placeholder="Id" name="BookingId" className="form-control" value={this.state.bookingId} onChange={this.changeBookingIdHandler}/>
                                    </div>
                                    <div className="form-group">
=======
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
                                        <label><b>Booking Date:</b></label>
                                        <input placeholder="BookingDate" name="BookingDate" className="form-control" value={this.state.bookingDate} onChange={this.changeBookingDateHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label><b>Booked Till Date:</b></label>
                                        <input placeholder="BookingTillDate" name="BookinkingTillDate" className="form-control" value={this.state.bookedTillDate} onChange={this.changeBookedTillDateHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label><b>Booking Description</b></label>
                                        <input placeholder="BookingDescription" name="BookingDescription" className="form-control" value={this.state.bookingDescription} onChange={this.changeBookingDescriptionHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label><b>Distance:</b></label>
                                        <input placeholder="Distance" name="BookingDistance" className="form-control" value={this.state.distance} onChange={this.changeBookingDistanceHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label><b>TotalCost:</b></label>
                                        <input placeholder="Total Cost" name="Total Cost" className="form-control" value={this.state.totalCost} onChange={this.changeBookingTotalCostHandler}/>
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
 
export default AddBooking;
