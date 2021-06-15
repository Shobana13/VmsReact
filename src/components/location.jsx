import React, { Component } from 'react';
import { Building, HouseFill,GeoAltFill } from 'react-bootstrap-icons';
import { Link} from "react-router-dom";
import Navbar from './homepage/navbar'
import Footer from "./homepage/footer";
class Location extends Component {
    
    render() {
        return (  
            <div class="body">   <Navbar/><br/><br/>    
            <div>
               
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                        
                            <div class="jumbotron" style={{backgroundColor:"#c9ced1"}}>
                            <h1 className="text-center"><b><GeoAltFill/>&nbsp;&nbsp;CHOOSE PICK-UP LOCATION</b></h1>
                            <div className="card-body ">
                            
                                <form class="was-validated">
                                    
                                    <div class="form-check">
                                    <Link to="/company">
                                     <b>&nbsp;<h2> <Building/>&nbsp;&nbsp;Pick up vehicle from Company Location</h2></b>
                                       </Link >
                                      

                                    </div><br/>
                                    <div class="form-check mb-3">
                                    <Link to="/add-address1">
                                     <b><h2><HouseFill/>&nbsp;&nbsp;Deliver vehicle to your DoorSteps</h2></b>
                                       </Link >
                                    

                                        <div class="invalid-feedback"><h5>Any one location must be selected</h5></div>
                                    </div>
                                    
                                    

                                </form>
                                

                            
                        </div><br/>
                        <a class="btn btn-primary" href="\vehicleHome" role="button">Back</a> 
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
            <Footer/>
            </div>  
        )
    } 

}

export default Location;
