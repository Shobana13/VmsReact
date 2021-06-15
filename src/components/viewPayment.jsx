import React, { Component } from 'react';
import paymentService from '../services/paymentService';
import Navbar from "./homepage/navbar";


class ViewPayment extends Component {
    constructor(props){
        super(props)
        this.state={
            paymentId: this.props.match.params.paymentId,
            payment:{}
        }
    }

    componentDidMount(){
        paymentService.viewPayment(this.props.match.params.paymentId).then( res =>{
            this.setState({payment: res.data});
        })
    }
    render() { 
        return ( 
            <div className="card col-md-6 offset-md-3"><Navbar/>
                <h3 className ="text-center"> View Payment Details</h3>
                <div className="card bg-info text-dark">
                <div className ="card-body">
                <h1>{this.props.match.params.paymentId}</h1>
                    <div className ="row">
                        <label><b>Payment ID: </b></label>
                        <div>{this.state.payment.paymentId}</div>
                    </div>
                    <div className ="row">
                        <label><b>Payment Mode:</b> </label>
                        <div>{this.state.payment.paymentMode}</div>
                    </div>
                    <div className ="row">
                        <label><b>Payment Date: </b></label>
                        <div>{this.state.payment.paymentDate}</div>
                    </div>
                    <div className ="row">
                        <label><b>Payment Status: </b></label>
                        <div>{this.state.payment.paymentStatus}</div>
                    </div>
                    <a class="btn btn-primary" href="\payment" role="button">Back</a>    
                        
                </div>

                </div>
            </div>
         )
    }
}
 
export default ViewPayment;
