import React from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setbookings } from "../actions/booking-actions";
import booking_Reducer from "../reducers/booking_reducer";
import booking_Types from "../services/booking_Types";
import Navbar from "../components/homepage/navbar";
import Footer from "./homepage/footer";


const { useEffect } = React;

const axios = require("axios");

function BookingHome() {
    const bookings = useSelector((state) => state.booking.bookings);
    const dispatch = useDispatch();

    const getBookingList = async () => {
        const { data } = await axios.get("http://localhost:8081/api/booking");
        console.log(data)

        dispatch(setbookings(data));
    };

    useEffect(() => {
        getBookingList();
    }, []);
    console.log(bookings);

    return (
        <div>
            <Navbar/>
            
                    <Container style={{ marginTop: "51px" }}>
                        <Row xs={1} md={3} className="g-4">
                            {bookings.length &&
                                bookings.map((booking) => (
                                    <Col key={booking.bookingId}>
                                        <Card style={{ width: '25rem',marginLeft:"400px" }}>
                                       
                                            <Card.Body style={{backgroundColor: '#dfebe8'}}>
                                                <Card.Text><h3>Total Cost for booking the vehicle : </h3><h2>Rs.{booking.totalCost}</h2></Card.Text>
                                                <Card.Text><h3>Vehicle is booked starting from Date : </h3><h4>{booking.bookingDate}</h4></Card.Text>
                                                <Card.Text><h3>Vehicle is Booked till Date : </h3><h4>{booking.bookedTillDate}</h4></Card.Text>                                 
                                                
                                                
                                            </Card.Body>
                                            
                                        </Card><br/>
                                        <a class="btn btn-success btn-block" style={{marginLeft:"425px"}} href="\makepayment" role="button "><h2>Book Now</h2></a><br/>
                                    </Col>

                                ))}
                        </Row>
                

                    </Container>
                   <Footer/>
                </div>
  );
}

export default BookingHome;