import React, { Component } from 'react';
import PaymentService from '../services/paymentService';
import Navbar from "./homepage/navbar";

class AddPayment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            paymentId: this.props.match.params.paymentId,
            paymentMode: '',
            paymentDate: '',
            paymentStatus: '',
        }
        this.changePaymentModeHandler = this.changePaymentModeHandler.bind(this);
        this.changePaymentDateHandler = this.changePaymentDateHandler.bind(this);
        this.changePaymentStatusHandler = this.changePaymentStatusHandler.bind(this);
        this.savePayment = this.savePayment.bind(this);
        this.changePaymentIdHandler = this.changePaymentIdHandler.bind(this);
    }

    savePayment = (e) => {
        e.preventDefault();
        let payment = { paymentId: this.state.paymentId, paymentMode: this.state.paymentMode, paymentDate: this.state.paymentDate, paymentStatus: this.state.paymentStatus };
        console.log('payment => ' + JSON.stringify(payment));

        PaymentService.addPayment(payment).then((res) => {
            this.props.history.push(`/payment`);
        });

    }

    changePaymentIdHandler = (event) => {
        this.setState({ paymentId: event.target.value })
    }

    changePaymentModeHandler = (event) => {
        this.setState({ paymentMode: event.target.value })
    }

    changePaymentDateHandler = (event) => {
        this.setState({ paymentDate: event.target.value })
    }

    changePaymentStatusHandler = (event) => {
        this.setState({ paymentStatus: event.target.value })
    }

    cancel() {
        this.props.history.push('/payment');
    }

    render() {
        return (
            <div><Navbar /><br />
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Payment</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>PaymentId:</label>
                                        <input placeholder="Id" name="PaymentId" className="form-control" value={this.state.paymentId} onChange={this.changePaymentIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>PaymentMode:</label>
                                        <input placeholder="PaymentMode" name="PaymentMode" className="form-control" value={this.state.paymentMode} onChange={this.changePaymentModeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>PaymentDate:</label>
                                        <input placeholder="PaymentDate" name="PaymentDate" className="form-control" value={this.state.paymentDate} onChange={this.changePaymentDateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>PaymentStatus:</label>
                                        <input placeholder="PaymentStatus" name="PaymentStatus" className="form-control" value={this.state.paymentStatus} onChange={this.changePaymentStatusHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.savePayment}> Save</button>
                                    <button className="btn btn-danger float-right" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div><br /><br /><br /><br /><br />

            </div>
        )
    }
}

export default AddPayment;