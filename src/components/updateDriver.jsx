import React, { Component } from 'react';
import DriverService from '../services/driverService';

class UpdateDriver extends Component {

    constructor(props){
        super(props)
        this.state = {
            driverId:this.props.match.params.driverId,
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
        this.updateDriver=this.updateDriver.bind(this);
      
    }

    componentDidMount(){
        DriverService.viewDriver(this.state.driverId).then((res) =>{
            let driver=res.data;
            this.setState({firstName:driver.firstName,
                lastName:driver.lastName,
                contactNumber:driver.contactNumber,
                email:driver.email,
                address:driver.address,
                chargesPerDay:driver.chargesPerDay,
                licenseNo:driver.licenseNo

            });
        });
    }

    updateDriver = (e) => {
        e.preventDefault();
        let driver={driverId: this.state.driverId,firstName: this.state.firstName, lastName: this.state.lastName,contactNumber: this.state.contactNumber,email: this.state.email,address: this.state.address,chargesPerDay: this.state.chargesPerDay,licenseNo: this.state.licenseNo};
        console.log('driver => '+ JSON.stringify(driver));

        DriverService.updateDriver(this.state.driverId,driver).then((res) => {
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
                            <h3 className="text-center">Update Driver</h3>
                            <div className="card-body">
                                <form>
                                    <h1>{this.props.match.params.driverId}</h1>
                                    <div className="form-group text-left">
                                        <label>FirstName:</label>
                                        <input placeholder="FirstName" name="FirstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>LastName:</label>
                                        <input placeholder="LastName" name="LastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>ContactNumber:</label>
                                        <input placeholder="ContactNumber" name="ContactNumber" className="form-control" value={this.state.contactNumber} onChange={this.changeContactNumberHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>Email:</label>
                                        <input placeholder="Email" name="Email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>Address:</label>
                                        <input placeholder="Address" name="Address" className="form-control" value={this.state.address} onChange={this.changeAddressHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>ChargesPerDay:</label>
                                        <input placeholder="ChargesPerDay" name="ChargesPerDay" className="form-control" value={this.state.chargesPerDay} onChange={this.changeChargesPerDayHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>LicenseNo:</label>
                                        <input placeholder="LicenseNo" name="LicenseNo" className="form-control" value={this.state.licenseNo} onChange={this.changeLicenseNoHandler}/>
                                    </div>
                                    <button className="btn btn-success float-right" onClick={this.updateDriver}> Save</button>
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
 
export default UpdateDriver;