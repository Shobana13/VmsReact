import React,{ Component }from "react";
import VehicleService from "../services/vehicleService";
//import Navbar1 from "./navbar1";




class Categories extends Component{
    constructor(props){
        super(props)
        this.state={
            vehicles:[],
            search:''
        }
    }
         getVehicleByCategory = () => {
            let vehicles = [];
            VehicleService.getVehicleByCategory(this.state.search).then((res) => {
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

      render() {
        return (
            <div>
                
                <br/>
                <br/>
                <div className="container">
                <form className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control ml-auto"
                        type="search"
                        name="name"
                        placeholder="Search by category"
                        aria-label="Search"
                        onChange={this.onChange}
                    />
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="button"
                        onClick={this.getVehicleByCategory}
                    >Search
              </button>
                </form>
                </div>
            </div>
      );
}
}
export default Categories; 