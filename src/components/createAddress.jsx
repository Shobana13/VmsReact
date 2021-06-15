import React, { Component } from 'react';
import AddressService from '../services/addressService';
import Navbar from "./homepage/navbar";
import Footer from "./homepage/footer";
class CreateAddress extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addressId: '',
            city: '',
            streetName: ''
        }
        this.changeStreetNameHandler = this.changeStreetNameHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.saveAddress = this.saveAddress.bind(this);
        this.changeIdHandler = this.changeIdHandler.bind(this);
    }

    saveAddress = (e) => {
        e.preventDefault();
        let address = { addressId: this.state.addressId, streetName: this.state.streetName, city: this.state.city };
        console.log('address => ' + JSON.stringify(address));

        AddressService.createAddress(address).then(res => {
            this.props.history.push(`/address`);
        });

    }

    changeIdHandler = (event) => {
        this.setState({ addressId: event.target.value })
    }

    changeStreetNameHandler = (event) => {
        this.setState({ streetName: event.target.value })
    }

    changeCityHandler = (event) => {
        this.setState({ city: event.target.value })
    }

    cancel() {
        this.props.history.push('/address');
    }



    render() {
        return (
            <div><Navbar />
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"><b>Add Address</b></h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label><b>AddressId:</b></label>
                                        <input placeholder="Id" name="AddressId" className="form-control" value={this.state.addressId} onChange={this.changeIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label><b>StreetName:</b></label>
                                        <input placeholder="streetname" name="streetName" className="form-control" value={this.state.streetName} onChange={this.changeStreetNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label><b>City:</b></label>
                                        <input placeholder="city" name="city" className="form-control" value={this.state.city} onChange={this.changeCityHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveAddress}> Save</button>
                                    <button className="btn btn-danger float-right" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default CreateAddress;