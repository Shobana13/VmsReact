import React, { Component } from 'react';
import AddressService from '../services/addressService';
import Navbar from "./homepage/navbar";
import Footer from "./homepage/footer";
class AddAddress extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '',
            streetName: ''
        }
        this.changeStreetNameHandler = this.changeStreetNameHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.saveAddress = this.saveAddress.bind(this);
        
    }

    saveAddress = (e) => {
        e.preventDefault();
        let address = {streetName: this.state.streetName, city: this.state.city };
        console.log('address => ' + JSON.stringify(address));

        AddressService.createAddress(address).then(res => {
            this.props.history.push(`/ad-booking`);
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
                                        <label><b>StreetName:</b></label>
                                        <input placeholder="DoorNo,Street Name" name="streetName" className="form-control" value={this.state.streetName} onChange={this.changeStreetNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label><b>City:</b></label>
                                        <input placeholder="city" name="city" className="form-control" value={this.state.city} onChange={this.changeCityHandler} />
                                    </div>

                                    <button className="btn btn-success btn-block" onClick={this.saveAddress}> Save</button><br/><br/><br/>
                                    <a class="btn btn-primary" href="\location" role="button">Back</a>

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

export default AddAddress;