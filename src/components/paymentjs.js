import React, { Component } from 'react'
import Navbar from "../components/homepage/navbar";

export default class Paymentjs extends Component {
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

                    <div>

                        <div class="container paymentjscontainer">
                            <center>
                                <div class="paymentjs-head"><h2>CHOOSE PAYMENT METHOD</h2></div>
                            </center>
                            <div class="panel-group">
                                <div class="panel panel-default">
                                    <div class="panel-heading paymentjs-option">
                                        <h4 class="panel-title paymentjs-option"><a data-toggle="collapse" href="#collapse1" className="paymentjs-option">NetBanking</a></h4>
                                    </div>
                                    <div id="collapse1" class="panel-collapse collapse pay-pad">
                                        <div className="container col-auto container-fluid">
                                            <form>
                                                <center>
                                                    <table className="table  text-center table-responsive table-bordered">
                                                        <tr>
                                                            <td>
                                                                <button className="btn"><img src="../image/Hdfc.jpg" width="200px" height="200px" /></button>
                                                            </td>
                                                            <td>
                                                                <button className="btn"><img src="../image/sbi.jpg" width="200px" height="200px" /></button>
                                                            </td>
                                                            <td>
                                                                <button className="btn"><img src="/axis.png" width="200px" height="200px" /></button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <button className="btn"><img src="/Bank/icici.png" width="200px" height="200px" /></button>
                                                            </td>
                                                            <td>
                                                                <button className="btn"><img src="/Bank/kotak.png" width="200px" height="200px" /></button>
                                                            </td>
                                                            <td>
                                                                <button className="btn"><img src="/Bank/pnb.png" width="200px" height="200px" /></button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </center>
                                                <h4 className="paymentjs-option">Other Bank</h4>
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
                                                </select>
                                                <center>
                                                    <input type="button" onClick={this.gotoHomePageHandle} className="btn btn-primary btn-block" value="Proceed" />
                                                </center>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* Credit and Debit Card */}
                                <div class="panel panel-default">
                                    <div class="panel-heading pay-head">
                                        <h4 class="panel-title paymentjs-option">
                                            <a data-toggle="collapse" href="#collapse2" className="paymentjs-option">Credit / Debit Card</a>
                                        </h4>
                                    </div>
                                    <div id="collapse2" class="panel-collapse collapse pay-pad">
                                        <form>
                                            <h4 className="paymentjs-option">Pay using Credit Card</h4>
                                            <img src="/assets/Logos/creds2.png" height="40px" width="230px" /><br />
                                            <input type="number" className="col-12 col-sm-12 payment-input" placeholder="CARD NUMBER" name="cardNumber" id="cardNumber" maxLength="16" /><br />
                                            <input type="number" className="col-5 col-sm-5 payment-input" placeholder="CVV" name="cardCVV" id="cardCVV" length="3" maxLength="3" />
                                            <b className="col-2 col-sm-2">Expiry Date</b>
                                            <input type="number " placeholder="MM/YY" className="col-5 col-sm-5 payment-input" /><br />
                                            <input type="text" className="col-12 col-sm-12 payment-input" placeholder="CARD HOLDER NAME" name="cardHolderName" id="cardHolderName" maxLength="30" /><br /><br />
                                            <center>
                                                <input type="button" onClick={this.gotoHomePageHandle} className="btn btn-primary" value="Proceed" />
                                            </center>
                                        </form>
                                    </div>
                                </div>
                                {/* UPI */}
                                <div class="panel panel-default">
                                    <div class="panel-heading pay-head">
                                        <h4 class="panel-title paymentjs-option">
                                            <a data-toggle="collapse" href="#collapse3" className="paymentjs-option">UPI</a>
                                        </h4>
                                    </div>
                                    <div id="collapse3" class="panel-collapse collapse  pay-pad">
                                        <form>
                                            <center><h4 className="paymentjs-option">Click on Any UPI option</h4></center>
                                            <button class="btn upi-button"><img src="assets/Logos/UPI/amazonpay.jpg" width="130" height="100" /></button>
                                            <button class="btn upi-button"><img src="assets/Logos/UPI/gpay.png" width="100" height="100" /></button>
                                            <button class="btn upi-button"><img src="assets/Logos/UPI/phonepe.png" width="100" height="100" /></button>
                                            <button class="btn upi-button"><img src="assets/Logos/UPI/upi.png" width="130" height="100" /></button>
                                            <button class="btn upi-button"><img src="assets/Logos/UPI/mobikwik.png" width="100" height="100" /></button>
                                            <button class="btn upi-button"><img src="assets/Logos/UPI/jio.png" width="100" height="100" /></button>
                                        </form>
                                    </div>
                                </div>
                                {/* Cash On Delivery */}
                                <div class="panel panel-default">
                                    <div class="panel-heading pay-head">
                                        <h4 class="panel-title paymentjs-option">
                                            <a data-toggle="collapse" href="#collapse4" className="paymentjs-option">Cash On Delivery</a>
                                        </h4>
                                    </div>

                                    <div id="collapse4" class="panel-collapse collapse  pay-pad">
                                        <center> <h4 className="paymentjs-option">You can Switch to UPI or Card Payment Any Time while on Cash on Delivery</h4>
                                        </center>
                                        <form action="/">
                                            <center><input type="button" onClick={this.gotoHomePageHandle} className="btn btn-primary" value="Proceed" /></center>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/**Ending Tag */}
                    </div>

                </div>
            </div>
        )
    }
}

