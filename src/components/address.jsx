import React, { Component } from 'react'
import NavBar from '../components/homepage/navbar'
import AddressService from '../services/addressService';


class Address extends Component {
    constructor(props) {
        super(props)

        this.state = {

            
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

   
    


    render() {
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <div>

                        <h2 className="text-center">Address List</h2>
                        <div className="row">
                            <button className="btn btn-info" onClick={this.addAddress}>Add Address</button>
                        </div><br/><br/>

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
                </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        );
    }
}

export default Address;