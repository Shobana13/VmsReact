import React, { Component } from 'react';
//import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-daterangepicker/daterangepicker.css';
//import carpark from '../../image/carpark.jpg';
import Navbar from "./homepage/navbar";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import Footer from './homepage/footer';

class Suv extends Component {
    render() {
        return (

            <div class="body">
                <Navbar />
                <div>
                    <div className="container" >
                        <div className="row">
                            <div className="caed col-md-10 offset-md-12 offset-md-1">
                                <h1 className="card" style={{ marginTop: "50px", textAlign: "center" }}><b>HATCHBACK-HYUNDAI I20</b></h1><br />
                                <div class="left">
                                    <div class="card bg-info text-light " style={{ height: "800px", textAlign: "center" }}>
                                        <div class="card-body  ">

                                            <Card.Img variant="top" src="https://www.carscoops.com/wp-content/uploads/2015/03/Hyundai-i20-Active-0.jpg" />
                                            <h2 class="card-text" style={{ color: 'black' }}><text> Description: </text></h2>
                                            <h2 class="card-text"><text>The Hyundai i20 has 1 Diesel Engine and 2 Petrol Engine on offer. The Diesel engine is 1493 cc while the Petrol engine is 1197 cc and 998 cc . It is available with the Manual & Automatic transmission. Depending upon the variant and fuel type the i20 has a mileage of . The i20 is a 5 seater</text></h2>

                                        </div>
                                    </div><br />

                                    <a class="btn btn-success btn-block" href="\location" role="button "><h2>Book Now</h2></a>
                                </div><br /><br /><br />
                            </div><br /><br /><br /><br /><br />

                            <div className="caed col-md-6">





                            </div>
                        </div>
                    </div>
                    <div className="container" >
                        <div className="row">
                            <div className="caed col-md-10 offset-md-12 offset-md-1">
                                <h1 className="card" style={{ marginTop: "50px", textAlign: "center" }}><b>HATCHBACK-RENAULT KWIT</b></h1><br />
                                <div class="left">
                                    <div class="card bg-info text-light " style={{ height: "800px", textAlign: "center" }}>
                                        <div class="card-body  ">

                                            <Card.Img variant="top" src="https://imgd.aeplcdn.com/664x374/cw/ec/18713/Renault-Kwid-Exterior-132531.jpg?wm=0&q=85" />
                                            <h2 class="card-text" style={{ color: 'black' }}><text> Description: </text></h2>
                                            <h2 class="card-text"><text>The Renault KWID Petrol engine is 799 cc and 999 cc,available with the Manual & Automatic transmission.Mileage of 20.71 to 22.3 kmpl.The KWID is a 5 seaterRenault KWID is offered in 13 variants - the base model of KWID is STD </text></h2>

                                        </div>
                                    </div><br />

                                    <a class="btn btn-success btn-block" href="\location" role="button "><h2>Book Now</h2></a>
                                </div><br /><br /><br />
                            </div><br /><br /><br /><br /><br />

                            <div className="caed col-md-6">





                            </div>
                        </div><a class="btn btn-primary" href="\vehicleHome" role="button">Back</a>
                    </div>
                </div><br />
                <Footer />
            </div>

        )
    }




}

export default Suv;
////<Card.Img variant="top"  src="https://imgd.aeplcdn.com/664x374/cw/ec/34288/Hyundai-i20-Active-Exterior-126611.jpg?wm=0&q=85"/>