import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Building, GeoAltFill } from 'react-bootstrap-icons';
import Navbar from "./homepage/navbar";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import Footer from "./homepage/footer";


class ChennaiLocation extends Component {
    render() {
        return (

            <div class="body">
                <Navbar />
                <div>
                    <div className="container" style={{ marginLeft: "300px" }}>
                        <div className="row">
                            <div className="caed col-md-5 offset-md-2 offset-md-1">
                                <h1 className="text-center" style={{ marginTop: "50px" }}><b><GeoAltFill />&nbsp;VEHICLE PICK-UP ADDRESS</b></h1><br />
                                <div class="left">
                                    <div class="card bg-info text-light " style={{ height: "400px", textAlign: "center" }}>
                                        <div class="card-body  ">
                                            <h1 class="card-title " style={{ color: 'black' }} ><Building />&nbsp;Chennai Company Address</h1><br />

                                            <h2 class="card-text"><text>S4, Mahalakshmi Flats, Giri Street,</text></h2>
                                            <h2 class="card-text"><text> West Mambalam</text></h2>
                                            <h2 class="card-text"><text> Pincode-603104 Chennai, India</text></h2>

                                        </div>
                                    </div><br />

                                    <a class="btn btn-success btn-block" href="\ad-booking" role="button "><h2>Book Now</h2></a>
                                </div><br /><br /><br />
                            </div><br /><br /><br /><br /><br />

                            <div className="caed col-md-6">




                            </div>
                        </div> <a class="btn btn-primary" href="\company" role="button">Back</a>
                    </div>
                </div><br />
                <Footer />
            </div>
        )



    }




}

export default ChennaiLocation;
