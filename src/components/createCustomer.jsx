import React, { Component } from 'react';
import CustomerService from '../services/customerService';
class CreateCustomer extends Component {
    constructor(props){
        super(props)
        this.state = {
            customerId:'',
            firstName:'',
            lastName: '',
            emailId:'',
            mobileNumber:''

        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeMobileHandler=this.changeMobileHandler.bind(this);
        this.saveCustomer=this.saveCustomer.bind(this);
        this.changeIdHandler=this.changeIdHandler.bind(this);
    }

    saveCustomer = (e) => {
        e.preventDefault();
        let customer={customerId:this.state.customerId,firstName: this.state.firstName, lastName: this.state.lastName,emailId: this.state.emailId,mobileNumber: this.state.mobileNumber};
        console.log('customer => '+ JSON.stringify(customer));

        CustomerService.createCustomer(customer).then(res => {
            this.props.history.push(`/customers`);
        });

    }

    changeIdHandler=(event) =>{
        this.setState({customerId: event.target.value})
    }

    changeFirstNameHandler=(event) =>{
        this.setState({firstName: event.target.value})
    }

    changeLastNameHandler=(event) =>{
        this.setState({lastName: event.target.value})
    }

    changeEmailHandler=(event) =>{
        this.setState({emailId: event.target.value})
    }

    changeMobileHandler=(event) =>{
        this.setState({mobileNumber: event.target.value})
    }

    cancel(){
        this.props.history.push('/customers');
    }



    render() { 
        return (  
            <div>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Customer</h3>
                            <div className="card-body">
                                <form>
                                <div className="form-group">
                                        <label>CustomerId:</label>
                                        <input placeholder="Id" name="CustomerId" className="form-control" value={this.state.customerId} onChange={this.changeIdHandler}/>
                                </div>
                                    <div className="form-group">
                                        <label>FirstName:</label>
                                        <input placeholder="firstname" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>LastName:</label>
                                        <input placeholder="lastname" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input placeholder="Email" name="Email" className="form-control" value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Mobile Number:</label>
                                        <input placeholder="Mobile Number" name="Mobile" className="form-control" value={this.state.mobileNumber} onChange={this.changeMobileHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveCustomer}> Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                                </form>
                            
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
 
export default CreateCustomer;