import React,{ Component }from "react";
import VehicleService from "../services/vehicleService";



class Vehicle extends Component{
    constructor(props){
        super(props)
        this.state={
            vehicles:[]
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
state = {
    vehicles: [],
    sortColumn: {path: "title", order:"asc"},
    search:"",
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
      <h1 className="text-center">Vehicles List</h1>
      <div className="row">
                <button className="btn-right btn-info btn-lg mb-3" onClick={this.addVehicle}>Add Vehicle</button>
             </div>
                <div className="row">
                <table className="table mt-9"> 
                    <thead>
                        <tr>
                            <th>VehicleId</th>
                            <th>VehicleNo</th>
                            <th>Type</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Location</th>
                            <th>Capacity</th>
                            <th>Charges/Km</th>
                            <th>Fixedcharges</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                <tbody>
                        {
                            this.state.vehicles.map(
                                vehicle =>
                                <tr key ={vehicle.vehicleId}>
                                    <td>{vehicle.vehicleId}</td>
                                    <td>{vehicle.vehicleNumber}</td>
                                    <td>{vehicle.type}</td>
                                    <td>{vehicle.category}</td>
                                    <td>{vehicle.description}</td>
                                    <td>{vehicle.location}</td>
                                    <td>{vehicle.capacity}</td>
                                    <td>{vehicle.chargesPerKM}</td>
                                    <td>{vehicle.fixedCharges}</td>
                                    <td>
                                    <button onClick = { () => this.update(vehicle.vehicleId)} className="btn btn-success">Update</button>
                                    <button onClick={() => this.deleteVehicleById(vehicle.vehicleId)}className="btn btn-danger ml-2" >Delete</button>
                                    <button onClick = { () => this.viewVehicle(vehicle.vehicleId)} className="btn btn-primary ml-2">View</button>
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