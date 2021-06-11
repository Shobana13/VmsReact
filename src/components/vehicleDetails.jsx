import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
//import { setvehicles } from "../actions/vehicle-actions";
import { setvehicles, selectedVehicle } from "../actions/vehicle-actions";
import vehicle_reducer from "../reducers/vehicle_reducer";
//import { addItemToCart } from "../action/cart-action";
import vehicle_Types from "../services/vehicle_Types";

  const { useEffect } = React;

const axios = require("axios");

function VehicleDetails() {
    const vehicles = useSelector((state) => state.vehicle.vehicles);
    const dispatch = useDispatch();

    const getVehicleById = async (vehicleId) => {
        const { data } = await axios.get(`http://localhost:8081/api/vehicle/${vehicleId}`);
        console.log(data)

        dispatch(selectedVehicle(data));
    };

    useEffect(() => {
        getVehicleById();
    }, []);
    console.log(vehicles);
    return (
        <div>
        <Container style={{ marginTop: "51px" }}>
            <Row xs={1} md={3} className="g-4">
                {vehicles.length &&
                    vehicles.map((vehicle) => (
                        <Col key={vehicle.vehicleId}>
                            <Card>
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

export default VehicleDetails;