//import React from "react";
import React,{ Component }from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import VehicleService from "../services/vehicleService";
import { useSelector, useDispatch } from "react-redux";
import { setvehicles } from "../actions/vehicle-actions";
import vehicle_reducer from "../reducers/vehicle_reducer";
import vehicle_Types from "../services/vehicle_Types";
import NavBar from '../components/homepage/navbar'


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
             <NavBar/>
                    <Container style={{ marginTop: "51px" }}>
                        <Row xs={1} md={3} className="g-4">
                            {vehicles.length &&
                                vehicles.map((vehicle) => (
                                    <Col key={vehicle.vehicleId}>
                                       <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40N9O2NHxH2E7VUzg5Ipm91pA6cZIaTcDPw&usqp=CAU"/>
                                            <Card.Body style={{backgroundColor: '#dfebe8'}}>
                                                <img src={""} alt={vehicle.title} />
                                                <Card.Text><h3>Category:</h3>  {vehicle.category}</Card.Text>
                                                <Card.Text><h3>Description:</h3> {vehicle.description}</Card.Text>
                                                <Card.Text><h3>Capacity:</h3>{vehicle.capacity}</Card.Text>
                                                <Card.Text><h3>VehicleNumber:</h3>   {vehicle.vehicleNumber}</Card.Text>
                                                <Button variant="primary">Book Now</Button>
                                            </Card.Body >
                                        </Card><br/><br/>
                                    </Col>
                                   

                                ))}
                        </Row>
                    </Container>
                </div>
  );
}
                            
export default VehicleHome;
