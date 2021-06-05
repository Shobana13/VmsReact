import React, { Component } from 'react';
import DriverService from '../services/driverService';
class AddDriver extends Component {
    constructor(props){
        super(props)
        this.state = {
            driverId:'',
            firstName:'',
            lastName: '',
            contactNumber:'',
            email:'',
            address:'',
            chargesPerDay:'',
            licenseNo:''
        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeContactNumberHandler=this.changeContactNumberHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.changeChargesPerDayHandler=this.changeChargesPerDayHandler.bind(this);
        this.changeLicenseNoHandler=this.changeLicenseNoHandler.bind(this);
        this.saveDriver=this.saveDriver.bind(this);
        this.changeIdHandler=this.changeIdHandler.bind(this);
    }

    saveDriver = (e) => {
        e.preventDefault();
        let driver={driverId:this.state.driverId,firstName: this.state.firstName, lastName: this.state.lastName,contactNumber: this.state.contactNumber,email: this.state.email,address: this.state.address,chargesPerDay: this.state.chargesPerDay,licenseNo: this.state.licenseNo};
        console.log('driver => '+ JSON.stringify(driver));

        DriverService.addDriver(driver).then(res => {
            this.props.history.push(`/driver`);
        });

    }

    changeIdHandler=(event) =>{
        this.setState({driverId: event.target.value})
    }

    changeFirstNameHandler=(event) =>{
        this.setState({firstName: event.target.value})
    }

    changeLastNameHandler=(event) =>{
        this.setState({lastName: event.target.value})
    }

    changeContactNumberHandler=(event) =>{
        this.setState({contactNumber: event.target.value})
    }

    changeEmailHandler=(event) =>{
        this.setState({email: event.target.value})
    }
    changeAddressHandler=(event) =>{
        this.setState({address: event.target.value})
    }
    changeChargesPerDayHandler=(event) =>{
        this.setState({chargesPerDay: event.target.value})
    }
    changeLicenseNoHandler=(event) =>{
        this.setState({licenseNo: event.target.value})
    }

    cancel(){
        this.props.history.push('/');
    }



    render() { 
        return (  
            <div>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Driver</h3>
                            <div className="card-body">
                                <form>
                                <div className="form-group">
                                        <label>DriverId:</label>
                                        <input placeholder="DriverId" name="DriverId" className="form-control" value={this.state.driverId} onChange={this.changeIdHandler}/>
                                </div>
                                    <div className="form-group">
                                        <label>FirstName:</label>
                                        <input placeholder="FirstName" name="FirstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>LastName:</label>
                                        <input placeholder="LastName" name="LastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>ContactNumber:</label>
                                        <input placeholder="ContactNumber" name="ContactNumber" className="form-control" value={this.state.contactNumber} onChange={this.changeContactNumberHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input placeholder="Email" name="Email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Address:</label>
                                        <input placeholder="Address" name="Address" className="form-control" value={this.state.address} onChange={this.changeAddressHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>ChargesPerDay:</label>
                                        <input placeholder="ChargesPerDay" name="ChargesPerDay" className="form-control" value={this.state.chargesPerDay} onChange={this.changeChargesPerDayHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>LicenseNo:</label>
                                        <input placeholder="LicenseNo" name="LicenseNo" className="form-control" value={this.state.licenseNo} onChange={this.changeLicenseNoHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveDriver}> Save</button>
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
 
export default AddDriver;