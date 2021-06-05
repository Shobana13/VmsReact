import React, { Component } from 'react';
import paymentService from '../paymentService/paymentService';


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
            <div className="card col-md-6 offset-md-3">
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
                        
                </div>

                </div>
            </div>
         )
    }
}
 
export default ViewPayment;
/*import React, { Component } from "react";
import CustomerService from "../services/customerService";

class ViewCustomer extends Component {
  state = {
    customer: {
      customerId: "",
      firstName: "",
      lastName:"",
      emailId: "",
      mobileNumber: "",
     
    },
  };
  componentDidMount() {
    CustomerService.getStudentById(this.props.match.params.id).then((res) =>
      this.setState({ customer: res.data })
    );
  }

    handleChange = (event) => {
    event.preventDefault();
    const customer = this.state.customer;
    customer[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ customer });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.customer);
     CustomerService.updateCustomer(
      this.state.customer,
      this.props.match.params.id
    ).then((res) => {
      this.props.history.push("/customers");
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
          <h1>{this.props.match.params.id}</h1>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              FirstName
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="FirstName"
              value={this.state.customer.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              LastName
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="FirstName"
              value={this.state.customer.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={this.state.customer.emailId}
              aria-describedby="emailHelp"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mobileNo" className="form-label">
              Mobile No
            </label>
            <input
              type="text"
              className="form-control"
              id="mobileNo"
              name="mobileNo"
              value={this.state.customer.mobileNumber}
              onChange={this.handleChange}
            />
          </div>
          
          <button type="submit" className="btn btn-primary float-right">
            Save
          </button>
          <button
            className="btn btn-secondary mr-2 float-right"
            onClick={() => {
              this.props.history.push("/customers");
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default ViewCustomer;
*/