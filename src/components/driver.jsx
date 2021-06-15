import React, { Component } from "react";
import DriverService from "../services/driverService";
import NavBar from '../components/homepage/navbar'


class Driver extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drivers: [],
            search: ''

        }
        this.addDriver = this.addDriver.bind(this);
        this.updateDriver = this.updateDriver.bind(this);
    }
    addDriver() {
        this.props.history.push('/add-driver');
    }

    viewDriver(driverId) {
        this.props.history.push(`/view-driver/${driverId}`);
    }
    updateDriver(driverId) {
        this.props.history.push(`/update-drivers/${driverId}`);
    }

    deleteDriverById = (driverId) => {
        console.log("Delete Driver with id: " + driverId);
        const drivers = this.state.drivers.filter(
            (driver) => driver.driverId !== driverId
        );
        this.setState({ drivers });
        DriverService.deleteDriverById(driverId);
    };

    getDriverByFirstName = () => {
        let drivers = [];
        DriverService.getDriverByFirstName(this.state.search).then((res) => {
            drivers = res.data;
            this.setState({ drivers });
            console.log(this.state.drivers);
        });
    }

    onChange = (event) => {
        console.log(event.target.value);
        this.setState({ search: event.target.value });
    };
    componentDidMount() {
        DriverService.getAllDrivers().then((res) => {
            console.log("data: ", res.data);
            this.setState({ drivers: res.data });
        });
        console.log("driver: ", this.state.drivers);
    }

    render() {
        return (
            <div>
<<<<<<< HEAD
                <Navbar/>
                <br/>
                <br/>
=======
                <NavBar />
                <br />
                <br />
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
                <div className="container">
                <form className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control ml-auto"
                        type="search"
                        name="name"
                        placeholder="Search by name"
                        aria-label="Search"
                        onChange={this.onChange}
                    />
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="button"
                        onClick={this.getDriverByFirstName}
                    >Search
              </button>
                </form>
                <h2 className="text-center">Drivers List</h2>
                <div className="row">
                    <button className="btn-right btn-info btn-lg mb-3" onClick={this.addDriver}>Add Driver</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>MobileNumber</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>ChargesPerday</th>
                                <th>LicenseNo </th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.drivers.map(
                                    driver =>
                                        <tr key={driver.driverId}>
                                            <td>{driver.firstName}</td>
                                            <td>{driver.lastName}</td>
                                            <td>{driver.contactNumber}</td>
                                            <td>{driver.email}</td>
                                            <td>{driver.address}</td>
                                            <td>{driver.chargesPerDay}</td>
                                            <td>{driver.licenseNo}</td>
                                            <td>
                                                <td>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.updateDriver(driver.driverId)} className="btn btn-warning ml-2 float-right">Update</button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger ml-2 float-right" onClick={() => this.deleteDriverById(driver.driverId)}>Delete</button>
                                                </td>
                                                <td>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.viewDriver(driver.driverId)} className="btn btn-primary ml-2 float-right">View</button>
                                                </td>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <a class="btn btn-primary" href="\admin-components" role="button">Back</a> 
            </div>
        </div>
        );
    }
}
export default Driver;