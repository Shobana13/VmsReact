import React, { Component } from 'react';
import CustomerService from '../services/customerService';


import NavBar from "./homepage/navbar";



class ViewCustomer extends Component {
    constructor(props){
        super(props)
        this.state={
            customerId: this.props.match.params.customerId,
            customer:{}
        }
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.customerId).then( res =>{
            this.setState({customer: res.data});
        })
    }
    render() { 
        return ( 
<<<<<<< HEAD
            <div className="card col-md-6 offset-md-3">
                <h3 className ="text-center"> View Customer Details</h3>
=======
            <div >
        <NavBar/><br/><br/>
           
            <div className="card col-md-6 offset-md-3" >
                
                <h3 className ="text-center"><b>VIEW CUSTOMER DETAILS</b></h3>
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
                <div className="card bg-dark text-light">
                <div className ="card-body">
                <h1>{this.props.match.params.customerId}</h1>
                    <div className ="row">

                        <label><b>SUV</b></label>
                        <div>{this.state.customer.firstName}</div>

                        <label><b>Customer First Name: </b></label>
                        <div>&nbsp;{this.state.customer.firstName}</div>
                    </div>
                    <div className ="row">
                        <label><b>Customer Last Name:</b> </label>
                        <div>&nbsp;{this.state.customer.lastName}</div>
                    </div>
                    <div className ="row">
                        <label><b>Customer emailId: </b></label>
                        <div>&nbsp;{this.state.customer.emailId}</div>
                    </div>
                    <div className ="row">
                        <label><b>Customer Mobile No: </b></label>
                        <div>&nbsp;{this.state.customer.mobileNumber}</div>
                    </div>
                    <a class="btn btn-primary" href="\customers" role="button">Back</a>    
                </div>

                </div>
            </div>
         )
    }
}
 
export default ViewCustomer;
