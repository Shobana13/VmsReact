import React, { Component } from 'react';
//import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD
//import 'bootstrap-daterangepicker/daterangepicker.css';
//import carpark from '../../image/carpark.jpg';
import Navbar from "./homepage/navbar";
=======
import { Building, GeoAltFill } from 'react-bootstrap-icons';
import NavBar from '../components/homepage/navbar'
import Footer from "./homepage/footer";
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1

class DelhiLocation extends Component {
    render() {
        return (
            
            <div class="body">
<<<<<<< HEAD
            <Navbar/>
            <div>
                <div className="container" style={{marginLeft:"300px"}}>
                    <div className="row">
                        <div className="caed col-md-5 offset-md-2 offset-md-1">
                            <h1 className="text-center" style={{marginTop:"50px"}}><b>VEHICLE PICK-UP ADDRESS</b></h1><br/>
                            <div class="left">
                                <div class="card bg-info text-light " style={{height:"400px" , textAlign:"center"}}>
                                    <div class="card-body  ">
                                       
                                        <h1 class="card-title " style={{color:'black'}} >Delhi Company Address</h1><br/>
                                        
                                        <h2 class="card-text"><text> 2nd Cross Cng pump, Mayur Place, </text></h2> 
                                        <h2 class="card-text"><text>Mayur Vihar, Delhi, </text></h2>
                                        <h2 class="card-text"><text> Pincode-110092 , India</text></h2>
                                        
                                    </div>
                                </div><br/>
                                
                                <a class="btn btn-success btn-block" href="\ad-booking" role="button "><h2>Book Now</h2></a>  
                            </div><br/><br/><br/>
                        </div><br/><br/><br/><br/><br/>
                       
                        <div className="caed col-md-6">

                            
                                        
                                    
=======
                <NavBar />
                <div>
                    <div className="container" style={{ marginLeft: "300px" }}>
                        <div className="row">
                            <div className="caed col-md-5 offset-md-2 offset-md-1">
                                <h1 className="text-center" style={{ marginTop: "50px" }}><b> <GeoAltFill />&nbsp;VEHICLE PICK-UP ADDRESS</b></h1><br />
                                <div class="left">
                                    <div class="card bg-info text-light " style={{ height: "400px", textAlign: "center" }}>
                                        <div class="card-body  ">

                                            <h1 class="card-title " style={{ color: 'black' }}> <Building />&nbsp;Delhi Company Address</h1><br />

                                            <h2 class="card-text"><text> 2nd Cross Cng pump, Mayur Place, </text></h2>
                                            <h2 class="card-text"><text>Mayur Vihar, Delhi, </text></h2>
                                            <h2 class="card-text"><text> Pincode-110092 , India</text></h2>

                                        </div>
                                    </div><br />

                                    <a class="btn btn-success btn-block" href="\ad-booking" role="button "><h2>Book Now</h2></a>
                                </div><br /><br /><br />
                            </div><br /><br /><br /><br /><br />

                            <div className="caed col-md-6">




                            </div>
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
                        </div>
                    </div>
                </div>
            </div>

            </div>
        )



    }




}

export default DelhiLocation;
