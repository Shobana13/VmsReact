import React,{ Component }from "react";
import DriverService from "../services/driverService";


class Driver extends Component{
    constructor(props){
        super(props)
        this.state={
            drivers:[]
        }
        this.addDriver=this.addDriver.bind(this);
        this.updateDriver=this.updateDriver.bind(this);
    }
        addDriver(){
            this.props.history.push('/add-driver');
        }

        viewDriver (driverId){
            this.props.history.push(`/view-driver/${driverId}`);
        }
        updateDriver(driverId){
            this.props.history.push(`/update-drivers/${driverId}`);
        }

        deleteDriverById = (driverId) => {
            console.log("Delete Driver with id: " + driverId);
            const drivers = this.state.drivers.filter(
              (driver) => driver.driverId !== driverId
            );
            this.setState({ drivers });
            DriverService.deleteDriverById (driverId);
          };
state = {
    drivers: [],
    sortColumn: {path: "title", order:"asc"},
    search:"",
};
componentDidMount() {
    DriverService.getAllDrivers().then((res) => {
      console.log("data: ", res.data);
      this.setState({ drivers: res.data });
    });
    console.log("driver: ", this.state.drivers);
  }

  render(){
      return(
  <div>
      <h2 className="text-center">Drivers List</h2>
      <div className="row">
                 <button className="btn-right btn-info btn-lg mb-3" onClick={this.addDriver}>Add Driver</button>
             </div>
                <div className="row">
                    <table className="table mt-9"> 
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>charge/day</th>
                            <th>LicenseNo </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.drivers.map(
                                driver =>
                                <tr key ={driver.driverId}>
                                    <td>{driver.driverId}</td>
                                    <td>{driver.firstName}</td>
                                    <td>{driver.lastName}</td>
                                    <td>{driver.contactNumber}</td>
                                    <td>{driver.email}</td>
                                    <td>{driver.address}</td>
                                    <td>{driver.chargesPerDay}</td>
                                    <td>{driver.licenseNo}</td>
                                    <td>
                                    <button style={{marginLeft:"10px"}} onClick = { () => this.updateDriver(driver.driverId)} className="btn btn-warning">Update</button>
                                    <button className="btn btn-danger ml-2" onClick={() => this.deleteDriverById(driver.driverId)}>Delete</button>
                                    <button style={{marginLeft:"10px"}} onClick = { () => this.viewDriver(driver.driverId)} className="btn btn-primary ml-2">View</button>
                                </td>
                                </tr> 
                            )
                        }
                    </tbody>
                    </table>
                </div>
            </div>
      );
}
}
export default Driver; 