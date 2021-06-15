import React, { Component } from 'react';
import CustomerService from '../services/customerService';
import NavBar from '../components/homepage/navbar'

class UpdateCustomer extends Component {

    constructor(props){
        super(props)
        this.state = {
            customerId:this.props.match.params.customerId,
            firstName:'',
            lastName: '',
            emailId:'',
            mobileNumber:''

        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeMobileHandler=this.changeMobileHandler.bind(this);
        this.updateCustomer=this.updateCustomer.bind(this);
      
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.customerId).then((res) =>{
            let customer=res.data;
            this.setState({firstName:customer.firstName,
                lastName:customer.lastName,
                emailId:customer.emailId,
                mobileNumber:customer.mobileNumber

            });
        });
    }

    updateCustomer = (e) => {
        e.preventDefault();
        let customer={firstName: this.state.firstName, lastName: this.state.lastName,emailId: this.state.emailId,mobileNumber: this.state.mobileNumber};
        console.log('customer => '+ JSON.stringify(customer));

        CustomerService.updateCustomer(customer,this.state.customerId).then((res) => {
              this.props.history.push(`/customers`);
        });

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
                <NavBar/>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"><br/>UPDATE CUSTOMER</h3>
                            <div className="card-body">
                                <form>
                                    <h1>{this.props.match.params.customerId}</h1>
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
                                    <button className="btn btn-success" onClick={this.updateCustomer}> Save</button>
                                    <button className="btn btn-danger float-right" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                                </form>
                            
                            </div>
                        </div>
                    </div>
                </div><br/><br/><br/>

            </div>
        )
    }
}
 
export default UpdateCustomer;