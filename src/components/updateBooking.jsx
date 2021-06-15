import React, { Component } from 'react';
import BookingService from '../services/bookingService';
import Navbar from '../components/homepage/navbar';

class UpdateBooking extends Component {

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
        this.changeBookingDateHandler=this.changeBookingDateHandler.bind(this);
        this.changeBookedTillDateHandler=this.changeBookedTillDateHandler.bind(this);
        this.changeBookingDescriptionHandler=this.changeBookingDescriptionHandler.bind(this);
        this.changeTotalCostHandler=this.changeTotalCostHandler.bind(this);
        this.changeDistanceHandler=this.changeDistanceHandler.bind(this);
        this.changeBookingIdHandler=this.changeBookingIdHandler.bind(this);
        this.updateBookingDate=this.updateBookingDate.bind(this);
    }

    componentDidMount(){
        BookingService.viewBooking(this.state.bookingId).then((res) =>{
            let booking=res.data;
            this.setState({bookingId:booking.bookingId,
                bookingDate:booking.bookingDate,
                bookedTillDate:booking.bookedTillDate,
                bookingDescription:booking.bookingDescription,
                totalCost:booking.totalCost,
                distance:booking.distance
            });
        });
    }

    updateBookingDate = (e) => {
        e.preventDefault();
        let booking={bookingId:this.state.bookingId, bookingDate: this.state.bookingDate, bookedTillDate: this.state.bookedTillDate,bookingDescription: this.state.bookingDescription,totalCost: this.state.totalCost,distance: this.state.distance};
        console.log('booking => '+ JSON.stringify(booking));

        BookingService.updateBookingDate(this.state.bookingId,booking).then((res) => {
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

    changeBookingDescriptionHandler=(event) =>{
        this.setState({bookingDescription: event.target.value})
    }

    changeTotalCostHandler=(event) =>{
        this.setState({totalCost: event.target.value})
    } 

    changeDistanceHandler=(event) =>{
        this.setState({distance: event.target.value})
    }

    cancel(){
        this.props.history.push('/booking');
    }

    render() { 
        return (  
            <div><Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Booking</h3>
                            <div className="card-body">
                                <form>
                                <h1>{this.props.match.params.bookingId}</h1>

                                <div className="form-group">
                                        <label><b>BookingId:</b></label>
                                        <input placeholder="BookingId" name="BookingId" className="form-control" value={this.state.bookingId} onChange={this.changeBookingIdHandler}/>
                                </div>
                                    <div className="form-group">
                                        <label><b>BookingDate:</b></label>
                                        <input placeholder="BookingDate" name="BookingDate" className="form-control" value={this.state.bookingDate} onChange={this.changeBookingDateHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label><b>BookedTillDate:</b></label>
                                        <input placeholder="BookedTillDate" name="BookedTillDate" className="form-control" value={this.state.bookedTillDate} onChange={this.changeBookedTillDateHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label><b>BookingDescription</b></label>
                                        <input placeholder="BookingDescription" name="BookingDescription" className="form-control" value={this.state.bookingDescription} onChange={this.changeBookingDescriptionHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label><b>TotalCost:</b></label>
                                        <input placeholder="TotalCost" name="TotalCost" className="form-control" value={this.state.totalCost} onChange={this.changeTotalCostHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label><b>Distance</b></label>
                                        <input placeholder="Distance" name="Distance" className="form-control" value={this.state.distance} onChange={this.changeDistanceHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateBookingDate}>Save</button>
                                    <button className="btn btn-danger float-right" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                                </form>
                            
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
 
export default UpdateBooking;