import React, { Component } from 'react';
import {
    Hourglass,
    SignpostSplit,
    ShieldCheck,
    CashCoin,
  } from "react-bootstrap-icons";
import v14 from '../../images/v14.jpg';
import v15 from '../../images/v15.jpg'
import v16 from '../../images/v16.jpg'
class Card extends Component {


    render() {
        return (
            <div className="container" style={{"width" :"100%"}}>
            <div className="row" style={{"marginLeft":"50px"}}>
                <div className="col">
                    <div className="card" style={{"width": "18rem","height":"22rem"}}>
                        <img src={v14} style={{"height":"150px"}} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"style={{"fontFamily":"-moz-initial"}}>Taxi</h5>
                            <p className="card-text" style={{"fontFamily":"sans-serif"}}>
                                    The perfect way to get through your everyday travel needs. City taxis are available 24/7 and you can book and travel in an instant.
                                </p>
                            <span><Hourglass/> <b>On Time</b></span> &nbsp; <span><SignpostSplit/><b>Multiple Stops </b></span>
                            
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{"width": "18rem","height":"22rem"}}>
                        <img src={v15} style={{"height":"150px"}} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"style={{"fontFamily":"-moz-initial"}}>Outstation</h5>
                            <p className="card-text" style={{"fontFamily":"sans-serif"}}>
                                    Ride out of town at affordable one-way and round-trip fares with  intercity travel service. Choose from  driven by top partners. </p>
                                <ShieldCheck/> <b>Secure</b> &nbsp;
                            
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{"width": "18rem", "height":"22rem"}}>
                        <img src={v16} style={{"height":"150px"}} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"style={{"fontFamily":"-moz-initial"}}>Rentals</h5>
                            <p className="card-text">
                                    With our Rentals you get a cab at your disposal. So be it a  day long business meeting, a shopping trip with your friends 
                                </p>
                            <CashCoin/> <b>Cashless Rides</b>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        );
    }
}

export default Card;
