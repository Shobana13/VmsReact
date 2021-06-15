import React, { Component } from 'react';
//import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-daterangepicker/daterangepicker.css';
//import carpark from '../../image/carpark.jpg';
import NavBar from '../components/homepage/navbar'
import { Card, Row, Col, Button, Container } from "react-bootstrap";

class Sedan extends Component {
    render() {
        return (
            
            <div class="body">
            <NavBar/>
            <div>
                <div className="container" >
                    <div className="row">
                        <div className="caed col-md-10 offset-md-12 offset-md-1">
                            <h1 className="card" style={{marginTop:"50px" , textAlign:"center"}}><b>SEDAN-SKODA RAPID TSI</b></h1><br/>
                            <div class="left">
                                <div class="card bg-info text-light " style={{height:"800px" , textAlign:"center"}}>
                                    <div class="card-body  ">
                                       
                                    <Card.Img variant="top"  src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Skoda/Rapid/7920/1608614333184/front-left-side-47.jpg"/>
                                    <h2 class="card-text"  style={{color:'black'}}><text> Description: </text></h2> 
                                        <h2 class="card-text"><text>The Skoda rapid has Mileage 16.24 to 18.97 kmpl Engine 999 cc Transmission Manual & Automatic Fuel Type PetrolEngine
799 cc - 999 cc
BHP
53.26 - 67.0 Bhp</text></h2> 
                                        
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
                            <h1 className="card" style={{marginTop:"50px",textAlign:"center"}}><b>SEDAN-HYUNDAI VERNA</b></h1><br/>
                            <div class="left">
                                <div class="card bg-info text-light " style={{height:"800px",textAlign:"center"}}>
                                    <div class="card-body  ">
                                       
                                    <Card.Img variant="top"  src="https://5.imimg.com/data5/TL/CR/DK/SELLER-21489999/hyundai-verna-diesel-500x500.jpg"/>
                                    <h2 class="card-text"  style={{color:'black'}}><text> Description: </text></h2> 
                                        <h2 class="card-text"><text>The HYUNDAI VERNA Mileage 17.7 to 25 kmpl Engine 998 to 1497 cc Transmission Manual, Automatic (CVT),Hyundai Verna is a 5 seater Seda </text></h2> 
                                        
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

export default Sedan;
////<Card.Img variant="top"  src="https://imgd.aeplcdn.com/664x374/cw/ec/34288/Hyundai-i20-Active-Exterior-126611.jpg?wm=0&q=85"/>