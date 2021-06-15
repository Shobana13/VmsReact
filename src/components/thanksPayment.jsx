import React, { Component } from 'react';
import Navbar from "./homepage/navbar";
import v13 from "../images/v13.jpg";
import Footer from './homepage/footer';

class ThanksPayment extends Component {
    render() {
        return (
            <div>
                <Navbar /><br/><br/>

                <div class="card bg-dark text-center" style={{marginLeft:"165px", color:"#521414", height:"600px", width:"1000px"}}>
                    <img src={v13} class="card-img" alt="..." />
                    <div class="card-img-overlay"><br/><br/><br/><br/><br/>
                        <h1 style={{marginLeft:"-350px"}}><b>PAYMENT SUCCESSFUL</b></h1><br/><br/>
                        <h4 class="card-title" style={{fontSize:"50px", color:"#1f1452", marginLeft:"-150px"}}><b>Thanks for Booking our Vehicle</b></h4><br/><br/>
                        <h2 class="card-text" style={{marginLeft:"-150px"}}><b>Enjoy the Drive and have a wonderful Journey</b></h2><br/>
                        
                        <a class="btn btn-success"  href="\" role="button "><h2>Home</h2></a><br/>
                    </div>
                </div><br/><br/><br/>     
                <Footer/>
            </div>
            
        )
    }

}
export default ThanksPayment;
