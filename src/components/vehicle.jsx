import React,{ Component }from "react";
import VehicleService from "../services/vehicleService";
import Navbar1 from "./navbar1";




class Vehicle extends Component{
    constructor(props){
        super(props)
        this.state={
            vehicles:[],
            search:''
        }
        this.addVehicle=this.addVehicle.bind(this);
        this.update=this.update.bind(this);
    }
        addVehicle(){
            this.props.history.push('/add-vehicle');
        }

        viewVehicle (vehicleId){
            this.props.history.push(`/view-vehicle/${vehicleId}`);
        }

        update(vehicleId){
            this.props.history.push(`/update-vehicles/${vehicleId}`);
        }

        deleteVehicleById = (vehicleId) => {
            console.log("Delete Vehicle with id: " + vehicleId);
            const vehicles = this.state.vehicles.filter(
              (vehicle) => vehicle.vehicleId !== vehicleId
            );
            this.setState({ vehicles });
            VehicleService.deleteVehicleById (vehicleId);
          };
          getVehicleByLocation = () => {
            let vehicles = [];
            VehicleService.getVehicleByLocation(this.state.search).then((res) => {
                vehicles = res.data;
                this.setState({ vehicles });
                console.log(this.state.vehicles);
            });
        }
    
        onChange = (event) => {
            console.log(event.target.value);
            this.setState({ search: event.target.value });
        };
componentDidMount() {
    VehicleService.getAllVehicles().then((res) => {
      console.log("data: ", res.data);
      this.setState({ vehicles: res.data });
    });
    console.log("vehicle: ", this.state.vehicles);
  }

  render(){
      return(
        <div>
            <Navbar1/>
        <form className="form-inline my-2 my-lg-0">
            <input
                className="form-control ml-auto"
                type="search"
                name="name"
                placeholder="Search by location"
                aria-label="Search"
                onChange={this.onChange}
            />
            <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="button"
                onClick={this.getVehicleByLocation}
            >Search
      </button>
        </form>
      <h1 className="text-center">Vehicles List</h1>
      <div className="row">
                <button className="btn-right btn-info btn-lg mb-3" onClick={this.addVehicle}>Add Vehicle</button>
             </div>
                <div className="row">
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>VehicleNumber</th>
                            <th>Type</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Location</th>
                            <th>Capacity</th>
                            <th>ChargesPerKm</th>
                            <th>Fixedcharges</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                <tbody>
                        {
                            this.state.vehicles.map(
                                vehicle =>
                                <tr key ={vehicle.vehicleId}>
                                    <td>{vehicle.vehicleNumber}</td>
                                    <td>{vehicle.type}</td>
                                    <td>{vehicle.category}</td>
                                    <td>{vehicle.description}</td>
                                    <td>{vehicle.location}</td>
                                    <td>{vehicle.capacity}</td>
                                    <td>{vehicle.chargesPerKM}</td>
                                    <td>{vehicle.fixedCharges}</td>
                                    <td>
                                    <td>
                                    <button style={{marginLeft:"10px"}} onClick = { () => this.update(vehicle.vehicleId)} className="btn btn-success float-right">Update</button>
                                    </td>
                                    <td>
                                    <button style={{marginLeft:"10px"}} onClick={() => this.deleteVehicleById(vehicle.vehicleId)}className="btn btn-danger ml-2 float-right" >Delete</button>
                                    </td>
                                    <td>
                                    <button style={{marginLeft:"10px"}} onClick = { () => this.viewVehicle(vehicle.vehicleId)} className="btn btn-primary ml-2 float-right">View</button>
                                </td>
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
export default Vehicle; 