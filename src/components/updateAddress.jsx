import React, { Component } from 'react';
import AddressService from '../services/addressService';

class UpdateAddress extends Component {

    constructor(props){
        super(props)
        this.state = {
            addressId:this.props.match.params.addressId,
            city:'',
            streetName: ''

        }
        this.changeStreetNameHandler=this.changeStreetNameHandler.bind(this);
        this.changeCityHandler=this.changeCityHandler.bind(this);
        this.updateAddress=this.updateAddress.bind(this);
        
      
    }

    componentDidMount(){
            AddressService.getAddressById(this.state.addressId).then((res) =>{
                let address=res.data;
                this.setState({streetName:address.streetName,
                    city:address.city
                });
            });
        }

        updateAddress = (e) => {
            e.preventDefault();
            let address={streetName:this.state.streetName, city: this.state.city};
            console.log('address => '+ JSON.stringify(address));
    
            AddressService.updateAddress(address,this.state.addressId).then(res => {
                this.props.history.push(`/address`);
            });
    
        }

   
        changeStreetNameHandler=(event) =>{
            this.setState({streetName: event.target.value})
        }
    
        changeCityHandler=(event) =>{
            this.setState({city: event.target.value})
        }
    
        cancel(){
            this.props.history.push('/address');
        }


    render(){
        return (  
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Address </h3>
                            <div className="card-body">
                                <form>
                                
                                    <div className="form-group">
                                        <label>StreetName:</label>
                                        <input placeholder="streetname" name="streetName" className="form-control" value={this.state.streetName} onChange={this.changeStreetNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>City:</label>
                                        <input placeholder="city" name="city" className="form-control" value={this.state.city} onChange={this.changeCityHandler}/>
                                    </div>
                
                                    <button className="btn btn-success" onClick={this.updateAddress}> Save</button>
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
 
export default UpdateAddress;