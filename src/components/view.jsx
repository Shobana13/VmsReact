import React, { Component } from 'react';
import bookingService from '../services/bookingService';
import Navbar from '../components/homepage/navbar';

class View extends Component {
    constructor(props){
        super(props)
        this.state={
            bookingId: this.props.match.params.bookingId,
            booking:{},
            customerId: this.props.match.params.customerId,
            customer:{},
        }
    }

    componentDidMount(){
            bookingService.BookingByCustomer(this.state.customerId).then( res =>{
            this.setState({booking: res.data});
            console.log(res.data);
        })
    }
    
    render() { 
        return ( 
            <div><NavBar/><br/><br/>
            <div className="card col-md-6 offset-md-3">
                <h3 className ="text-center"> View Booking Details</h3>
                <div className="card bg-info text-dark">
                <div className ="card-body">
                 <div className="row">
                        <label><b>TotalCost: </b></label>
                        <div>{this.state.booking.totalCost}</div>
                    </div>

                </div>
                <a class="btn btn-primary" href="\booking" role="button">Back</a>    

                </div>
            </div><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
         )
    }
}
 
export default View;