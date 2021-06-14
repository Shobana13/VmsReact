import React, { Component } from 'react';
//import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-daterangepicker/daterangepicker.css';
//import carpark from '../../image/carpark.jpg';
import Navbar from "./homepage/navbar";
import { Card, Row, Col, Button, Container } from "react-bootstrap";

class Suv extends Component {
    render() {
        return (
            
            <div class="body">
            <Navbar/>
            <div>
                <div className="container" >
                    <div className="row">
                        <div className="caed col-md-10 offset-md-12 offset-md-1">
                            <h1 className="card" style={{marginTop:"50px",textAlign:"center"}}><b>SUV-HYUNDAI CRETA</b></h1><br/>
                            <div class="left">
                                <div class="card bg-info text-light " style={{height:"800px" , textAlign:"center"}}>
                                    <div class="card-body  ">
                                       
                                    <Card.Img variant="top"  src="https://imgd.aeplcdn.com/664x374/cw/ec/34288/Hyundai-i20-Active-Exterior-126611.jpg?wm=0&q=85"/>
                                    <h2 class="card-text"  style={{color:'black'}}><text> Description: </text></h2> 
                                        <h2 class="card-text"><text>The Hyundai Creta has 1 Diesel Engine and 2 Petrol.The Diesel engine is 1493 cc while the Petrol engine is 1497 cc and 1353 cc . Manual & Automatic transmission,fuel type mileage of 16.8 to 21.4 kmpl. The Creta is a 5 seater capacity  </text></h2> 
                                        
                                    </div>
                                </div><br/>
                                
                                <a class="btn btn-success btn-block" href="\location" role="button "><h2>Book Now</h2></a>  
                            </div><br/><br/><br/>
                        </div><br/><br/><br/><br/><br/>
                       
                        <div className="caed col-md-6">


                            
                                        
                                    
                        </div>
                    </div>
                </div>
                <div className="container" >
                    <div className="row">
                        <div className="caed col-md-10 offset-md-12 offset-md-1">
                            <h1 className="card" style={{marginTop:"50px",textAlign:"center"}}><b>SUV-RENAULT KWIT</b></h1><br/>
                            <div class="left">
                                <div class="card bg-info text-light " style={{height:"800px" , textAlign:"center"}}>
                                    <div class="card-body  ">
                                       
                                    <Card.Img variant="top"  src="https://www.carblogindia.com/wp-content/uploads/2019/11/Mahindra-Scorpio.jpg"/>
                                    <h2 class="card-text"  style={{color:'black'}}><text> Description: </text></h2> 
                                        <h2 class="card-text"><text>The mahindra scorpio has Fuel Type ,DieselEngine Displacement (cc)2179Max Power the Diesel engine is 2179 cc . It is available with the Manual transmission,Seating Capacity 7 ,TransmissionType ManualBoot Space (Litres) 460Fuel Tank Capacity 60.0 </text></h2> 
                                        
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

export default Suv;
////<Card.Img variant="top"  src="https://imgd.aeplcdn.com/664x374/cw/ec/34288/Hyundai-i20-Active-Exterior-126611.jpg?wm=0&q=85"/>