import React, { Component } from 'react'
import CustomerService from '../services/customerService'
import NavBar from '../components/homepage/navbar'




class Customer extends Component {
    constructor(props) {
        super(props)

        this.state = {

            customers: [],
            search: '',

        };

        //this.updateCustomer = this.updateCustomer.bind(this);
        this.addCustomer = this.addCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.viewCustomer = this.viewCustomer.bind(this);
        this.updateCustomer = this.updateCustomer.bind(this);

    }



    addCustomer() {
        this.props.history.push('/add-customer');
    }


    viewCustomer(customerId) {
        this.props.history.push(`/view-customers/${customerId}`);
    }

    updateCustomer(customerId) {
        this.props.history.push(`/update-customers/${customerId}`);
    }


    deleteCustomer(customerId) {
        CustomerService.deleteCustomer(customerId).then(res => {
            this.setState({ customers: this.state.customers.filter(customer => customer.customerId !== customerId) });
        });
    }


    componentDidMount() {
        CustomerService.getAllCustomers().then((res) => {
            this.setState({ customers: res.data });


        });
    }

    getCustomerByFirstName = () => {
        let customers = [];
        CustomerService.getCustomerByFirstName(this.state.search).then((res) => {
            customers = res.data;
            this.setState({ customers });
            console.log(this.state.customers);
        });
    }

    onChange = (event) => {
        console.log(event.target.value);
        this.setState({ search: event.target.value });
    };



    render() {


        return (
            <div>
                <NavBar />
                <br />
                <br />

                <form style={{ "marginRight": "50px" }} className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control ml-auto"
                        type="search"
                        name="name"
                        placeholder="Search by name"
                        aria-label="Search"
                        onChange={this.onChange}
                    />
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="button"
                        onClick={this.getCustomerByFirstName}
                    >Search</button>
                </form>
                <div className="container">
                    <h2 className="text-center">Customers List</h2>
                    <div className="row">
                        <button className="btn btn-info" onClick={this.addCustomer}>Add Customer</button>
                    </div><br />
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Customer First Name</th>
                                    <th>Customer Last Name</th>
                                    <th>Customer Email Id</th>
                                    <th>Customer Mobile Number</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.customers.map(
                                        customer =>
                                            <tr key={customer.customerId}>
                                                <td>{customer.firstName}</td>
                                                <td>{customer.lastName}</td>
                                                <td>{customer.emailId}</td>
                                                <td>{customer.mobileNumber}</td>
                                                <td>
                                                    <button onClick={() => this.deleteCustomer(customer.customerId)} className="btn btn-danger">Delete</button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.viewCustomer(customer.customerId)} className="btn btn-primary">View</button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.updateCustomer(customer.customerId)} className="btn btn-warning">Update</button>

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

export default Customer;