import React, { Component } from 'react';
import vehicleService from '../services/vehicleService';
import NavBar from "./homepage/navbar";


class ViewVehicle extends Component {
    constructor(props){
        super(props)
        this.state={
            vehicleId: this.props.match.params.vehicleId,
            vehicle:{}
        }
    }

    componentDidMount(){
        vehicleService.viewVehicle(this.state.vehicleId).then( res =>{
            this.setState({vehicle: res.data});
        })
    }
    render() { 
        return ( 
            <div>
            <NavBar/>
            <div className="card col-md-6 offset-md-3">
                <h3 className ="text-center"> View Vehicle Details</h3>
                <div className="card bg-dark text-white">
                <div className ="card-body">
                <h1>{this.props.match.params.vehicleId}</h1>
                    <div className ="row">
                        <label><b>Vehicle VehicleId: </b></label>
                        <div>{this.state.vehicle.vehicleId}</div>
                    </div>
                    <div className ="row">
                        <label><b>Vehicle VehicleNumber:</b> </label>
                        <div>{this.state.vehicle.vehicleNumber}</div>
                    </div>
                    <div className ="row">
                        <label><b>Vehicle Type: </b></label>
                        <div>{this.state.vehicle.type}</div>
                    </div>
                    <div className ="row">
                        <label><b>Vehicle Category: </b></label>
                        <div>{this.state.vehicle.category}</div>
                    </div>
                    <div className ="row">
                        <label><b>Vehicle Description: </b></label>
                        <div>{this.state.vehicle.description}</div>
                    </div>
                    <div className ="row">
                        <label><b>Vehicle Location: </b></label>
                        <div>{this.state.vehicle.location}</div>
                    </div>
                    <div className ="row">
                        <label><b>Vehicle Capacity: </b></label>
                        <div>{this.state.vehicle.capacity}</div>
                    </div>
                    <div className ="row">
                        <label><b>Vehicle ChargesPerKM: </b></label>
                        <div>{this.state.vehicle.chargesPerKM}</div>
                    </div>
                    <div className ="row">
                        <label><b>Vehicle FixedCharges: </b></label>
                        <div>{this.state.vehicle.fixedCharges}</div>
                    </div>
                    </div>  
                </div>
                <a class="btn btn-primary" href="\vehicle" role="button">Back</a>   
                </div><br/> <br/><br/><br/>
            </div>
         )
    }
}
 
export default ViewVehicle;