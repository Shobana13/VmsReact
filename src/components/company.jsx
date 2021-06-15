import React, { Component } from 'react'
//import Navbar from "../components/homepage/navbar";
import Aham from "../images/Aham.jpg";
import Bengaluru from "../images/Bengaluru.jpg"
import chennai from "../images/chennai.jpg"
import loc from "../images/loc.jpg"
import delhi1 from "../images/delhi1.jpg"
import mumbai from "../images/mumbai.jpg"
<<<<<<< HEAD
import { Link} from "react-router-dom";
//import sbi from "../images/sbi.jpg";
//import Axis1 from "../images/Axis1.jpg";
//import icici from "../images/icici.jpg";
//import amazonpay1 from "../images/amazonpay1.jpg";
//import credit1 from "../images/credit1.jpg";
//import "../CustomCSS/paymentcss.css";
//import gpay from "../images/gpay.jpg";
//import Kotak from "../images/Kotak.jpg";
//import pnb from "../images/pnb.jpg";
=======
import { Link } from "react-router-dom";
import Navbar from '../components/homepage/navbar'
import Footer from "./homepage/footer";
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1

 class Company extends Component {
    constructor(props) {
        super(props);
        
    }
    gotoHomePageHandle = () => {
        alert("Thanks for Booking")
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                

                <div class="body2">

<<<<<<< HEAD
                    <div ><br/><br/><br/><br/>
                    
=======
                    <div ><br />

>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
                        <div class="container paymentjscontainer">
                            <center>
                                <div class="paymentjs-head"><h1>CLICK BELOW LINK TO SELECT THE LOCATION</h1></div><br/><br/><br/>
                            </center><br/>
                            <div class="panel-group">
                                <div class="panel panel-default">
                                    <div class="panel-heading pay-head">
                                        <h1 class="panel-title text-center" ><a data-toggle="collapse" href="#collapse1" style={{color:"rgb(15, 14, 61)"}}>AVAILABLE LOCATIONS</a></h1><br/>
                                    </div>
                                    <div id="collapse1" class="panel-collapse collapse pay-pad">
                                        <div className="container col-auto container-fluid">
                                            <form>
                                                <center>
                                                    <table className="table  text-center table-responsive table-bordered">
                                                        <center>
                                                        <tr>
                                                            <td>
                                                                <a className="btn" href="\companyLocation" role="button"><img src={Aham} width="200px" height="200px"   /></a>
                                                                <h4>AHMEDABAD</h4>
                                                            </td>
                                                            <td>
                                                                <a className="btn" href="\bengaluruLocation" role="button"><img src={Bengaluru} width="200px" height="200px" /></a>
                                                                <h4>BENGALURU</h4>
                                                            </td>
                                                            <td>
                                                                <a className="btn" href="\chennaiLocation" role="button"><img src={chennai} width="200px" height="200px" /></a>
                                                                <h4>CHENNAI</h4>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a className="btn" href="\lucknowLocation" role="button"><img src={loc} width="200px" height="200px" /></a>
                                                                <h4>LUCKNOW</h4>
                                                            </td>
                                                            <td>
                                                                <a className="btn" href="\delhiLocation" role="button"><img src={delhi1} width="200px" height="200px" /></a>
                                                                <h4>DELHI</h4>
                                                            </td>
                                                            <td>
                                                                <a className="btn" href="\mumbaiLocation" role="button"><img src={mumbai} width="200px" height="200px" /></a>
                                                                <h4>MUMBAI</h4>
                                                            </td>
                                                        </tr>
                                                        </center>
                                                    </table>
                                                </center>
                                                
                                                <center>
                                                <a class="btn btn-primary" href="\location" role="button">Back</a>
                                                </center><br/><br/>
                                            </form>
                                        </div>
                                    </div>
                                </div><br/>
                                
                               
                                
                            </div>

                        </div>
                        
                    </div>

                </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
}
export default Company;