import React, { Component } from 'react';
//import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-daterangepicker/daterangepicker.css';
//import carpark from '../../image/carpark.jpg';
import Navbar from "./homepage/navbar";
import { Card, Row, Col, Button, Container } from "react-bootstrap";

class MiniBusLocation extends Component {
    render() {
        return (
            
            <div class="body">
            <Navbar/>
            <div>
                <div className="container" >
                    <div className="row">
                    <div className="caed col-md-10 offset-md-12 offset-md-1">
                            <h1 className="card" style={{marginTop:"50px",textAlign:"center"}}><b>SUV-MAHINDRA SCORPIO</b></h1><br/>
                            <div class="left">
                                <div class="card bg-info text-light " style={{height:"800px" , textAlign:"center"}}>
                                    <div class="card-body  ">
                                       
                                    <Card.Img variant="top"  src="https://images.financialexpress.com/2020/09/maruti-suzuki-eeco-sales-milestone-10-years.jpg"/>
                                    <h2 class="card-text"  style={{color:'black'}}><text> Description: </text></h2> 
                                        <h2 class="card-text"><text>Mileage 16.11 to 30.47 km/kg Engine 1196 cc Transmission Manual Fuel Type Petrol & CNGIt comes with a powerful 1196cc BS6* compliant engine makes every journey Happy</text></h2> 
                                        
                                    </div>
                                </div><br/>
                                
                                <a class="btn btn-success btn-block" href="\location" role="button "><h2>Book Now</h2></a>  
                            </div><br/><br/><br/>
                        </div><br/><br/><br/><br/><br/>
                       
                        <div className="caed col-md-6">

                            
                                        
                                    
                        </div>
                    </div>
                </div>
            </div>

            </div>
        )



    }




}

export default MiniBusLocation;
