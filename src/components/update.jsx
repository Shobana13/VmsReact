import React, { Component } from 'react';
import VehicleService from '../services/vehicleService';
import NavBar from '../components/homepage/navbar';

class Update extends Component {

    constructor(props){
        super(props)
        this.state = {
            vehicleId:this.props.match.params.vehicleId,
            vehicleNumber:'',
            type: '',
            category:'',
            description:'',
            location:'',
            capacity:'',
            chargesPerKM:'',
            fixedCharges:''

        }
        this.changeVehicleNumberHandler=this.changeVehicleNumberHandler.bind(this);
        this.changeTypeHandler=this.changeTypeHandler.bind(this);
        this.changeCategoryHandler=this.changeCategoryHandler.bind(this);
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this);
        this.changeLocationHandler=this.changeLocationHandler.bind(this);
        this.changeCapacityHandler=this.changeCapacityHandler.bind(this);
        this.changeChargesPerKMHandler=this.changeChargesPerKMHandler.bind(this);
        this.changeFixedChargesHandler=this.changeFixedChargesHandler.bind(this);
        this.update=this.update.bind(this);
        this.changeIdHandler=this.changeIdHandler.bind(this);
    }

    componentDidMount(){
        VehicleService.viewVehicle(this.state.vehicleId).then((res) =>{
            let vehicle=res.data;
            this.setState({vehicleId:vehicle.vehicleId,vehicleNumber:vehicle.vehicleNumber,type:vehicle.type,category:vehicle.category,description:vehicle.description,location:vehicle.location,capacity:vehicle.capacity,chargesPerKM:vehicle.chargesPerKM,fixedCharges:vehicle.fixedCharges});
        });
    }

    update = (e) => {
        e.preventDefault();
        let vehicle={vehicleId: this.state.vehicleId,vehicleNumber: this.state.vehicleNumber, type: this.state.type,category: this.state.category,location: this.state.location,capacity: this.state.capacity,description: this.state.description,chargesPerKM: this.state.chargesPerKM,fixedCharges: this.state.fixedCharges};
        console.log('vehicle => '+ JSON.stringify(vehicle));

        VehicleService.update(this.state.vehicleId,vehicle).then((res) => {
              this.props.history.push(`/vehicle`);
        });

    }
    

    changeIdHandler=(event) =>{
        this.setState({vehicleId: event.target.value})
    }

    changeVehicleNumberHandler=(event) =>{
        this.setState({vehicleNumber: event.target.value})
    }

    changeTypeHandler=(event) =>{
        this.setState({type: event.target.value})
    }

    changeCategoryHandler=(event) =>{
        this.setState({category: event.target.value})
    }

    changeDescriptionHandler=(event) =>{
        this.setState({description: event.target.value})
    }
    changeLocationHandler=(event) =>{
        this.setState({location: event.target.value})
    }
    changeCapacityHandler=(event) =>{
        this.setState({capacity: event.target.value})
    }
    changeChargesPerKMHandler=(event) =>{
        this.setState({chargesPerKM: event.target.value})
    }
    changeFixedChargesHandler=(event) =>{
        this.setState({fixedCharges: event.target.value})
    }


    cancel(){
        this.props.history.push('/vehicle');
    }



    render() { 
        return (  
            <div><NavBar/><br/><br/>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Vehicle</h3>
                            <div className="card-body">
                                <form>
                                    <h1>{this.props.match.params.vehicleId}</h1>
                                    <div className="form-group text-left">
                                        <label>VehicleId:</label>
                                        <input placeholder="VehicleId" name="VehicleId" className="form-control" value={this.state.vehicleId} onChange={this.changeIdHandler}/>
                                    </div>
                        
                                    <div className="form-group text-left">
                                        <label>VehicleNumber:</label>
                                        <input placeholder="VehicleNumber" name="VehicleNumber" className="form-control" value={this.state.vehicleNumber} onChange={this.changeVehicleNumberHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>Type:</label>
                                        <input placeholder="Type" name="Type" className="form-control" value={this.state.type} onChange={this.changeTypeHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>Category:</label>
                                        <input placeholder="Category" name="Category" className="form-control" value={this.state.category} onChange={this.changeCategoryHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>Description:</label>
                                        <input placeholder="Description" name="Description" className="form-control" value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>Location:</label>
                                        <input placeholder="Location" name="Location" className="form-control" value={this.state.location} onChange={this.changeLocationHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>Capacity:</label>
                                        <input placeholder="Capacity" name="Capacity" className="form-control" value={this.state.capacity} onChange={this.changeCapacityHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>ChargesPerKM:</label>
                                        <input placeholder="ChargesPerKM" name="ChargesPerKM" className="form-control" value={this.state.chargesPerKM} onChange={this.changeChargesPerKMHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>FixedCharges:</label>
                                        <input placeholder="FixedCharges" name="FixedCharges" className="form-control" value={this.state.fixedCharges} onChange={this.changeFixedChargesHandler}/>
                                    </div>
                                    <button className="btn btn-success float-right" onClick={this.update}>Save</button>
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
 
export default Update;