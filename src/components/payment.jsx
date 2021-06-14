import React, { Component } from "react";
import PaymentService from "../services/paymentService";
import Navbar from "./homepage/navbar";

class Payment extends Component {
    constructor(props){
       super(props)
      
        this.state = {
            payments:[]
        }
        
    this.cancelPayment = this.cancelPayment.bind(this);
    this.viewPayment = this.viewPayment.bind(this);
    this.updatePaymentStatus=this.updatePaymentStatus.bind(this);
    this.addPayment=this.addPayment.bind(this);

   }    
    state = {
        payments: [],
        sortColumn: { path: "title", order: "asc" },
        search: "",
    };

    componentDidMount() {
        PaymentService.getAllPayments().then((res) => {
            console.log("data : ", res.data);
            this.setState({ payments: res.data });
        });
        console.log("payments: ", this.state.payment);
    }
    

    addPayment(){
        this.props.history.push('/add-payment');
    }

    updatePaymentStatus(paymentId){
        this.props.history.push(`/update-payment/${paymentId}`);
    }

    cancelPayment(paymentId){
        PaymentService.cancelPayment(paymentId).then((res) => {
            this.setState({payments:this.state.payments.filter(payment => payment.paymentId !== paymentId)});
        });
    }

    viewPayment(paymentId){
        this.props.history.push(`/view-payment/${paymentId}`)
    };





    render() {
        
        return (
            <div>
            <Navbar/>
            <div className="container">

                <h2 className="text-center">Payment List</h2>
                <div className="row">
                    <button style={{marginDown:"5px"}} className="btn-right btn-info btn-lg mb-3" onClick={this.addPayment}>Add Payment</button>
                    </div>
                    <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Payment PaymentId</th>
                                <th>Payment PaymentMode</th>
                                <th>Payment PaymentDate</th>
                                <th>Payment PaymentStatus</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.payments.map(
                                    payment =>
                                        <tr key={payment.paymentId}>
                                            <td>{payment.paymentId}</td>
                                            <td>{payment.paymentMode}</td>
                                            <td>{payment.paymentDate}</td>
                                            <td>{payment.paymentStatus}</td>
                                            <td>
                                                <button  style={{marginLeft:"10px"}} onClick = {() => this.updatePaymentStatus(payment.paymentId)} className="btn btn-success">Update</button>
                                                <button onClick={() => this.cancelPayment(payment.paymentId)} className="btn btn-danger ml-2">Delete</button>
                                                <button onClick = {() => this.viewPayment(payment.paymentId)} className = "btn btn-primary ml-2">View</button>
                                            </td>
                                            
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <a class="btn btn-primary" href="\admin-components" role="button">Back</a> 
            </div>
        </div>
        );
    }

}
export default Payment;