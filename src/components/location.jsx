import React, { Component } from 'react';
<<<<<<< HEAD
import { Building, HouseFill } from 'react-bootstrap-icons';
//import background from '../../image/background.jpg';
//import DateRangePicker from 'react-bootstrap-daterangepicker';
//import NavBar from './NavBar';
//import Footer from './Footer';
import { Link} from "react-router-dom";
=======
import { Building, HouseFill,GeoAltFill } from 'react-bootstrap-icons';
import { Link} from "react-router-dom";
import Navbar from './homepage/navbar'
import Footer from "./homepage/footer";
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
class Location extends Component {
    
    render() {
        return (  
            <div class="body">       
            <div>
                
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                        
                            <div class="jumbotron" style={{backgroundColor:"#c9ced1"}}>
                            <h1 className="text-center"><b>CHOOSE PICK-UP LOCATION</b></h1>
                            <div className="card-body ">
                            
                                <form class="was-validated">
                                    
                                    <div class="form-check">
                                    <Link to="/company">
                                     <b>&nbsp;<h2> <Building/>&nbsp;Pick up vehicle from Company Location</h2></b>
                                       </Link >
                                      

                                    </div><br/>
                                    <div class="form-check mb-3">
                                    <Link to="/company">
                                     <b><h2><HouseFill/>&nbsp;Deliver vehicle to your DoorSteps</h2></b>
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
            </div>  
        )
    } 

}

export default Location;
