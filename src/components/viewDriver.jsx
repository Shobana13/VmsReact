import React, { Component } from 'react';
import driverService from '../services/driverService';
import Navbar from "./homepage/navbar";

class ViewDriver extends Component {
    constructor(props){
        super(props)
        this.state={
            driverId: this.props.match.params.driverId,
            driver:{}
        }
    }

    componentDidMount(){
        driverService.viewDriver(this.state.driverId).then( res =>{
            this.setState({driver: res.data});
        })
    }
    render() { 
        return ( 
            <div><Navbar/><br/>
            <div className="card col-md-6 offset-md-3">
                <h3 className ="text-center"> View Driver Details</h3>
                <div className="card bg-dark text-light">
                <div className ="card-body">
                <h1>{this.props.match.params.driverId}</h1>
                    <div className ="row">
                        <label><b>Driver DriverId: </b></label>
                        <div>{this.state.driver.driverId}</div>
                    </div>
                    <div className ="row">
                        <label><b>Driver FirstName:</b> </label>
                        <div>{this.state.driver.firstName}</div>
                    </div>
                    <div className ="row">
                        <label><b>Driver LastName: </b></label>
                        <div>{this.state.driver.lastName}</div>
                    </div>
                    <div className ="row">
                        <label><b>Driver ContactNumber: </b></label>
                        <div>{this.state.driver.contactNumber}</div>
                    </div>
                    <div className ="row">
                        <label><b>Driver Email: </b></label>
                        <div>{this.state.driver.email}</div>
                    </div>
                    <div className ="row">
                        <label><b>Driver Address: </b></label>
                        <div>{this.state.driver.address}</div>
                    </div>
                    <div className ="row">
                        <label><b>Driver ChargesPerDay: </b></label>
                        <div>{this.state.driver.chargesPerDay}</div>
                    </div>
                    <div className ="row">
                        <label><b>Driver LicenseNo: </b></label>
                        <div>{this.state.driver.licenseNo}</div>
                    </div>
                        
                </div>
                <a class="btn btn-primary" href="\driver" role="button">Back</a>    
                </div>
            </div><br/><br/><br/><br/><br/><br/>
            </div>
         )
    }
}
 
export default ViewDriver;