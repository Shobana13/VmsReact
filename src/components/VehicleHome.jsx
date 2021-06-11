//import React from "react";
import React,{ Component }from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import VehicleService from "../services/vehicleService";
import { useSelector, useDispatch } from "react-redux";
import { setvehicles } from "../actions/vehicle-actions";
import vehicle_reducer from "../reducers/vehicle_reducer";
import vehicle_Types from "../services/vehicle_Types";
import Navbar from "../components/homepage/navbar";


const { useEffect } = React;

const axios = require("axios");

function VehicleHome() {
    const vehicles = useSelector((state) => state.vehicle.vehicles);
    const dispatch = useDispatch();

    const getVehicleList = async () => {
        const { data } = await axios.get("http://localhost:8081/api/vehicle");
        console.log(data)

        dispatch(setvehicles(data));
    };

    useEffect(() => {
        getVehicleList();
    }, []);
    console.log(vehicles);


   

    return (
        <div>
             <Navbar/>
                    <Container style={{ marginTop: "51px" }}>
                        <Row xs={1} md={3} className="g-4">
                            {vehicles.length &&
                                vehicles.map((vehicle) => (
                                    <Col key={vehicle.vehicleId}>
                                       <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top"  src="https://images.outlookindia.com/public/uploads/articles/2018/12/10/car_1_20181210_571_855.jpg"/>
                                            <Card.Body>
                                                <img src={""} alt={vehicle.title} />
                                                <Card.Title>{vehicle.vehicleNumber}</Card.Title>
                                                <Card.Title>{vehicle.type}</Card.Title>
                                                <Card.Text>{vehicle.category}</Card.Text>
                                                <Card.Text>{vehicle.description}</Card.Text>
                                                <Card.Text>{vehicle.location}</Card.Text>
                                                <Card.Text>{vehicle.capacity}</Card.Text>
                                                <Card.Text>{vehicle.chargesPerKm}</Card.Text>
                                                <Card.Text>{vehicle.fixedCharges}</Card.Text>
                                                <Button variant="primary">Book Now</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                ))}
                        </Row>
                    </Container>
                </div>
  );
}
                            
export default VehicleHome;
