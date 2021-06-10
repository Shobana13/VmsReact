import React, { Component } from 'react';
import background from '../../image/background.jpg';
import DateRangePicker from 'react-bootstrap-daterangepicker';
//import NavBar from './NavBar';
//import Footer from './Footer';


class BookingNew extends Component {

    render() {
        return (
            <div class="body">
                <div>
                    
                    <div className="container">
                        <div className="row">
                            <div className="caed col-md-6 offset-md-3 offset-md-3">


                                <div class="jumbotron">
                                    <div class="card-body">
                                        <h6 class="card-title h6">Select Booking Date Range</h6>
                                        <div class="input-group input-daterange ">
                                            <DateRangePicker

                                                themeVariant="dark"
                                                initialSettings={{ startDate: '01/01/2021', endDate: '12/31/2021' }}
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
                    <div class="container mt-5 mb-5" style="width: 400px">
                        <input type="text" id="picker" class="form-control" value="01/01/2021 31-12-2021">
                            <p><br/></p>
                            <p>Booking Date: <b id="start">2021-01-01</b></p>
                            <p>End Date: <b id="end">2021-12-31</b></p>
                        </input>
                    </div>
                        
                </div>
                
            </div>

        )

    }

}

export default BookingNew
/*
const bok={
    bookingDate:,
    bookedTillDate:,
}
const book=(
    state=bok, action
)=>{
    if(action.getStartDate===startdate)
    {
        
    }
}
*/