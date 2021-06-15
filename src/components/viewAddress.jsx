import React, { Component } from 'react';
import AddressService from '../services/addressService';
import Navbar from '../components/homepage/navbar';


class ViewAddress extends Component {
    constructor(props){
        super(props)
        this.state={
            addressId: this.props.match.params.addressId,
            address:{}
        }
    }

    componentDidMount(){
        AddressService.getAddressById(this.state.addressId).then( res =>{
            this.setState({address: res.data});
        })
    }
    render() { 
        return ( 
            <div className="card col-md-6 offset-md-3"><Navbar/><br/><br/>
                <h3 className ="text-center"> View Address Details</h3>
                <div className="card bg-info text-dark">
                <div className ="card-body">
                <h1>{this.props.match.params.addressId}</h1>
                    <div className ="row">
                        <label><b> City: </b></label>
                        <div>{this.state.address.city}</div>
                    </div>
                    <div className ="row">
                        <label><b> Street Name:</b> </label>
                        <div>{this.state.address.streetName}</div>
                    </div>
                        
                </div>
                <a class="btn btn-primary" href="\address" role="button">Back</a>    

                </div>
            </div>
         )
    }
}
 
export default ViewAddress;