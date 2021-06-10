import React, { Component } from 'react';
import background from '../../image/background.jpg';
import DateRangePicker from 'react-bootstrap-daterangepicker';
//import NavBar from './NavBar';
//import Footer from './Footer';
class BookingFrontEnd extends Component {
    
    render() {
        return (  
            <div class="body">       
            <div>
                
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                        
                            <div class="jumbotron">
                            <h3 className="text-center">Enter pick-up location</h3>
                            <div className="card-body">
                            
                                <form class="was-validated">
                                    
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required />
                                        <label class="form-check-label" for="validationFormCheck2">Pick up vehicle from Company Location</label>

                                    </div>
                                    <div class="form-check mb-3">
                                        <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required />
                                        <label class="form-check-label" for="validationFormCheck3">Pick up vehicle from your Location</label>

                                        <div class="invalid-feedback">Any one location must be selected</div>
                                    </div>
                                    
                                    

                                </form>
                                

                            
                        </div>
                        <div class="jumbotron">
                        <div class="card-body">
                                <h5 class="card-title">Select Date</h5>
                                <div class="input-group input-daterange ">
                                            <DateRangePicker

                                                themeVariant="dark"
                                                initialSettings={{ startDate: '01/01/2020', endDate: '01/15/2020' }}
                                            >
                                                <input type="text" className="form-control" />
                                            </DateRangePicker>
                                            <div class="payment booking-cta p "></div>
                                            
                                          
                                        </div>
                                
                            </div>
                            </div>
                            <button type="button" class="btn btn-success">Next</button>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
            </div>  
        )
    } 

}

export default BookingFrontEnd;
/*

var loginButton;
if (loggedIn) {
  loginButton = <LogoutButton />;
} else {
  loginButton = <LoginButton />;
}

return (
  <nav>
    <Home />
    {loginButton}
  </nav>
);




<button className="btn btn-success" onClick={this.saveBooking}> Save</button>
                                      <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>



if(form.getInput('Pick up vehicle from Company Location').checked == true) {
         <button type="button" class="btn btn-success">Next</button>
}
if(form.getInput('Pick up vehicle from your Location')) {
        <button type="button" class="btn btn-success">Next</button>
}



var time = new Date().getHours();
if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}





                                       <div className="form-group">
                                        <label>BookningId:</label>
                                        <input placeholder="Id" name="BookingId" className="form-control" value={this.state.bookingId} onChange={this.changeBookingIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Booking Date:</label>
                                        <input placeholder="BookingDate" name="BookingDate" className="form-control" value={this.state.bookingDate} onChange={this.changeBookingDateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Booked Till Date:</label>
                                        <input placeholder="BookingTillDate" name="BookinkingTillDate" className="form-control" value={this.state.bookedTillDate} onChange={this.changeBookedTillDateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Booking Description</label>
                                        <input placeholder="BookingDescription" name="BookingDescription" className="form-control" value={this.state.bookingDescription} onChange={this.changeBookingDescriptionHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Distance:</label>
                                        <input placeholder="Distance" name="BookingDistance" className="form-control" value={this.state.distance} onChange={this.changeBookingDistanceHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>TotalCost:</label>
                                        <input placeholder="Total Cost" name="Total Cost" className="form-control" value={this.state.totalCost} onChange={this.changeBookingTotalCostHandler} />
                                    </div>
                                      */