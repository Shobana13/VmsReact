import React, { Component } from 'react'
import Navbar from "./homepage/navbar"
import AddressService from '../services/addressService';

class Address extends Component {
    constructor(props) {
        super(props)

        this.state = {

            search: "",
            addresses: []
        }

        this.addAddress = this.addAddress.bind(this);
        this.deleteAddress = this.deleteAddress.bind(this);
        this.viewAddress = this.viewAddress.bind(this);
        this.updateAddress = this.updateAddress.bind(this);

    }
    addAddress() {
        this.props.history.push('/add-address');
    }

    updateAddress(addressId) {
        this.props.history.push(`/update-address/${addressId}`);
    }

    viewAddress(addressId) {
        this.props.history.push(`/view-address/${addressId}`);
    }


    deleteAddress(addressId) {
        AddressService.deleteAddress(addressId).then(res => {
            this.setState({ addresses: this.state.addresses.filter(address => address.addressId !== addressId) });
        });
    }

    componentDidMount() {
        AddressService.getAllAddress().then((res) => {
            this.setState({ addresses: res.data });
        });
    }

    viewAddressById = () => {
        let addresss = [];
        AddressService.getAddressById(this.state.search).then((res) => {
            console.log("**data: ", res.data);
            addresss = res.data;
            this.setState({ addresss });
        });

        console.log("**viewAddress" + this.state.addresss);
    };
    onChange = (event) => {
        console.log(event.target.value);
        this.setState({ search: event.target.value });
    };


    render() {
        return (
            <div>
            <Navbar />
            <div className="container">
                <div>
                
                    <h2 className="text-center">Address List</h2>
                    <div className="row">
                        <button className="btn btn-info" onClick={this.addAddress}>Add Address</button>
                    </div>

                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control ml-auto" type="search" placeholder="search by Id" aria-label="search" onChange={this.onChange} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.viewAddressById}> Search</button>
                    </form>

                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>City</th>
                                    <th>StreetName</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.addresses.map(
                                        address =>
                                            <tr key={address.addressId}>
                                                <td>{address.city}</td>
                                                <td>{address.streetName}</td>
                                                <td>
                                                    <button onClick={() => this.deleteAddress(address.addressId)} className="btn btn-danger">Delete</button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.updateAddress(address.addressId)} className="btn btn-warning">Update</button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.viewAddress(address.addressId)} className="btn btn-primary">View</button>
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
        </div>
        );
    }
}

export default Address;