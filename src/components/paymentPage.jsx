import React, { Component } from 'react'
import NavBar from '../components/homepage/navbar'
import hdfcb from "../images/hdfcb.jpg";
import sbi from "../images/sbi.jpg";
import Axis1 from "../images/Axis1.jpg";
import icici from "../images/icici.jpg";
import amazonpay1 from "../images/amazonpay1.jpg";
import credit1 from "../images/credit1.jpg";
import "../CustomCSS/paymentcss.css";
import gpay from "../images/gpay.jpg";
import Kotak from "../images/Kotak.jpg";
import pnb from "../images/pnb.jpg";
import phonepe from "../images/phonepe.jpg";
import upi from "../images/upi.jpg";
import mobikwik from "../images/mobikwik.jpg";
import paytm from "../images/paytm.jpg";
import Footer from './homepage/footer';

class PaymentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDateTime: Date().toLocaleString()
        }
    }
    gotoHomePageHandle = () => {
        alert("Thanks for Booking")
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <NavBar />

                <div class="body2">

                    <div><br/><br/><span class= "badge bg-light text-center" style= {{marginLeft:"660px"}}><h6><b>Payment Date and Time : { this.state.currentDateTime }</b></h6></span>
                        <div class="container paymentjscontainer">
                            <center>
                                <div class="paymentjs-head"><h2>CHOOSE PAYMENT METHOD</h2></div>
                            </center><br/>
                            <div class="panel-group">
                                <div class="panel panel-default">
                                    <div class="panel-heading pay-head">
                                        <h4 class="panel-title text-center"><a data-toggle="collapse" href="#collapse1">NetBanking</a></h4>
                                    </div>
                                    <div id="collapse1" class="panel-collapse collapse pay-pad">
                                        <div className="container col-auto container-fluid">
                                            <form>
                                                <center>
                                                    <table className="table  text-center table-responsive table-bordered">
                                                        <center>
                                                        <tr>
                                                            <td>
                                                                <button className="btn"><img src={hdfcb} width="200px" height="200px" /></button>
                                                            </td>
                                                            <td>
                                                                <button className="btn"><img src={sbi} width="200px" height="200px" /></button>
                                                            </td>
                                                            <td>
                                                                <button className="btn"><img src={Axis1} width="200px" height="200px" /></button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <button className="btn"><img src={icici} width="200px" height="200px" /></button>
                                                            </td>
                                                            <td>
                                                                <button className="btn"><img src={Kotak} width="200px" height="200px" /></button>
                                                            </td>
                                                            <td>
                                                                <button className="btn"><img src={pnb} width="200px" height="200px" /></button>
                                                            </td>
                                                        </tr>
                                                        </center>
                                                    </table>
                                                </center>
                                                <h4 className="Bank-option text-center">Other Bank</h4>
                                                <select className="bank-option" onfocus='this.size=5;' onblur='this.size=1;' onchange='this.size=1; this.blur();'>
                                                    <option value="">Select Other Bank</option>
                                                    <option value="HDFC Bank">HDFC BANK</option>
                                                    <option value="Axis Bank">Axis Bank</option>
                                                    <option value="SBI">State Bank of India</option>
                                                    <option value="ICICI">ICICI Bank</option>
                                                    <option value="Kotak">Kotak Mahindra Bank</option>
                                                    <option value="PNB">Punjab National Bank</option>
                                                    <option value="Bank of India">Bank of India</option>
                                                    <option value="Indian Bank">Indian Bank</option>
                                                    <option value="Canara Bank">Canara Bank</option>
                                                    <option value="City Union Bank">City Union Bank</option>
                                                    <option value="Bank of Baroda">Bank of Baroda</option>
                                                    <option value="Karur Vysya">Karur Vysya</option>
                                                    <option value="IDBI Bank">IDBI Bank</option>
                                                    <option value="Yes Bank">Yes Bank</option>
                                                    <option value="IndusInd Bank">IndusInd Bank</option>
                                                    <option value="Federal Bank">Federal Bank</option>
                                                </select><br/><br/>
                                                <center>
                                                    <input type="button" onClick={this.gotoHomePageHandle} className="btn btn-success btn-block" value="Proceed" />
                                                </center><br/><br/>
                                            </form>
                                        </div>
                                    </div>
                                </div><br/>
                                {/* Credit and Debit Card */}
                                <div class="panel panel-default">
                                    <div class="panel-heading pay-head">
                                        <h4 class="panel-title text-center">
                                            <a data-toggle="collapse" href="#collapse2" className="text-center">Credit / Debit Card</a>
                                        </h4>
                                    </div>
                                    <div id="collapse2" class="panel-collapse collapse pay-pad">
                                        <form>
                                            <h4 className="text-center">Pay using Credit Card</h4>
                                            <img src={credit1} height="26px" width="230px" /><br/><br/>
                                            
                                            <a class="btn btn-success btn-block" href="\add-creditcard" role="button">Proceed to Credit Card Payment</a> 
                                        </form><br/>
                                    </div>
                                </div><br/>
                                {/* UPI */}
                                <div class="panel panel-default">
                                    <div class="panel-heading pay-head">
                                        <h4 class="panel-title text-center">
                                            <a data-toggle="collapse" href="#collapse3">UPI</a>
                                        </h4>
                                    </div>
                                    <div id="collapse3" class="panel-collapse collapse  pay-pad">
                                        <form>
                                            <center><h4 className="text-center">Click on Any UPI option</h4></center>
                                               <center>
                                                    <table className="table  text-center table-responsive table-bordered">
                                                        <center>
                                                            <tr>
                                                                <td>
                                                                    <button class="btn upi-button"><img src={amazonpay1} width="125px" height="125px" /></button>
                                                                </td>
                                                                <td>
                                                                    <button class="btn upi-button"><img src={gpay} width="125px" height="125px" /></button>
                                                                </td>
                                                                <td>
                                                                    <button class="btn upi-button"><img src={phonepe} width="125px" height="125px" /></button>
                                                                </td>
                                                                <td>
                                                                    <button class="btn upi-button"><img src={upi} width="125px" height="125px" /></button>
                                                                </td>
                                                                <td>
                                                                    <button class="btn upi-button"><img src={mobikwik} width="125px" height="125px" /></button>
                                                                </td>
                                                                <td>
                                                                    <button class="btn upi-button"><img src={paytm} width="125px" height="125px" /></button>
                                                                </td>
                                                            </tr>
                                                        </center>
                                                    </table>
                                                </center>
                                        </form>
                                    </div>
                                </div><br/>
                                {/* Cash On Delivery */}
                                <div class="panel panel-default">
                                    <div class="panel-heading pay-head">
                                        <h4 class="panel-title text-center">
                                            <a data-toggle="collapse" href="#collapse4" className="text-center">Pay by Cash</a>
                                        </h4>
                                    </div>

                                    <div id="collapse4" class="panel-collapse collapse  pay-pad">
                                        <center> <h4 className="paymentjs-option">You can Switch to UPI or Card Payment Any Time while you Pay by Cash</h4>
                                        </center><br/>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/**Ending Tag */}
                    </div><br/>
                    <a class="btn btn-primary" style={{marginLeft:"150px"}}  href="\bookingHome" role="button">Back</a>
                </div><br/><br/><br/><br/>
                <Footer/>
            </div>
        )
    }
}

export default PaymentPage;

/*
<center>
                                            <input type="number" className="col-12 col-sm-7 payment-input" placeholder="CARD NUMBER" name="cardNumber" id="cardNumber" maxLength="16" /><br/><br/>
                                            <input type="number" className="col-5 col-sm-7 payment-input" placeholder="CVV" name="cardCVV" id="cardCVV" length="3" maxLength="3" /><br/><br/>
                                            <b className="col-1 col-sm-1">Expiry Date</b>
                                            <input type="number " placeholder="MM/YY" className="col-6 col-sm-6 payment-input" /><br/><br></br>
                                            <input type="text" className="col-12 col-sm-7 payment-input" placeholder="CARD HOLDER NAME" name="cardHolderName" id="cardHolderName" maxLength="30" /><br /><br />
                                            </center>
                                            

                                            <center>
                                                <input type="button" onClick={this.gotoHomePageHandle} className="btn btn-success btn-block" value="Proceed" />
                                            </center>
*/