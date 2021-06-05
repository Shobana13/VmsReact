import React,{ Component } from  'react'
import AddressService from '../services/addressService';

class Address extends Component {
    constructor(props){
        super(props)
        
        this.state = {  
            addresses:[]
        }
        
        this.addAddress=this.addAddress.bind(this);
        this.deleteAddress = this.deleteAddress.bind(this);
       // this.viewAddress = this.viewAddress.bind(this);
        this.updateAddress=this.updateAddress.bind(this);

    }
    addAddress(){
        this.props.history.push('/add-address');
    }

    updateAddress(addressId){
        this.props.history.push(`/update-address/${addressId}`);
    }


    deleteAddress(addressId){
       AddressService.deleteAddress(addressId).then(res => {
            this.setState({addresses: this.state.addresses.filter(address =>address.addressId !== addressId)});
        });
    }

    componentDidMount(){
        AddressService.getAllAddress().then((res) => {
        this.setState({addresses: res.data});
        });
    }
  
    render() { 
        return ( 
            <div>
             <h2  className="text-center">Address List</h2>
             <div className="row">
                 <button className="btn btn-info" onClick={this.addAddress}>Add Address</button>
             </div>
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
                                <tr key ={address.addressId}>
                                    <td>{address.city}</td>
                                    <td>{address.streetName}</td>
                                    <td>
                                        <button onClick = { () => this.deleteAddress(address.addressId)} className="btn btn-danger">Delete</button>
                                        <button  style={{marginLeft:"10px"}} onClick = { () => this.updateAddress(address.addressIdId)} className="btn btn-warning">Update</button>
                                    </td>
                                  
                                </tr>
                            )
                        }
                    </tbody>
                    </table>
                </div>
           
            </div>
         );
    }
}
 
export default Address;