import React, { Component } from 'react'
import { GeoAltFill, FolderSymlinkFill } from 'react-bootstrap-icons';
import Aham from "../images/Aham.jpg";
import Bengaluru from "../images/Bengaluru.jpg"
import chennai from "../images/chennai.jpg"
import loc from "../images/loc.jpg"
import delhi1 from "../images/delhi1.jpg"
import mumbai from "../images/mumbai.jpg"
import { Link } from "react-router-dom";
import Navbar from "./homepage/navbar";
import Footer from "./homepage/footer";

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
                <Navbar />

                <div class="body2">

                    <div ><br /><br /><br /><br />

                        <div class="container paymentjscontainer">
                            <center>
                                <div class="paymentjs-head"><h1><GeoAltFill /> &nbsp; CLICK BELOW LINK TO SELECT THE LOCATION</h1></div><br /><br /><br />
                            </center><br />
                            <div class="panel-group">
                                <div class="panel panel-default">
                                    <div class="panel-heading pay-head">
                                        <h1 class="panel-title text-center" ><a data-toggle="collapse" href="#collapse1" style={{ color: "rgb(15, 14, 61)" }}><FolderSymlinkFill /> &nbsp; &nbsp;AVAILABLE LOCATIONS</a></h1><br />
                                    </div>
                                    <div id="collapse1" class="panel-collapse collapse pay-pad">
                                        <div className="container col-auto container-fluid">
                                            <form>
                                                <center>
                                                    <table className="table  text-center table-responsive table-bordered">
                                                        <center>
                                                            <tr>
                                                                <td>
                                                                    <a className="btn" href="\companyLocation" role="button"><img src={Aham} width="200px" height="200px" /></a>
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
                                                </center><br /><br />
                                            </form>
                                        </div>
                                    </div>
                                </div><br />



                            </div>

                        </div>

                    </div>
                </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <Footer />
            </div>
        )
    }
}
export default Company;