import React, { Component } from "react";
import CreditCardService from '../services/creditCardService';
import Navbar from "./homepage/navbar";

class CreditCard extends Component {
    constructor(props){
       super(props)
      
        this.state = {
            creditCards:[]
        }
        
   
    this.addCreditCard=this.addCreditCard.bind(this);
    

   }    
    state = {
        creditCards: [],
        sortColumn: { path: "title", order: "asc" },
        search: "",
    };

    componentDidMount() {
        CreditCardService.getAllCreditCards().then((res) => {
            console.log("data : ", res.data);
            this.setState({ creditCards: res.data });
        });
        console.log("creditCards: ", this.state.creditCard);
    }
    

    addCreditCard(){
        this.props.history.push('/add-CreditCard');
    }

    render() {
        
        return (
            <div>
            <Navbar/>
            <div className="container">

                <h2 className="text-center">Credit Card List</h2>
                <div className="row">
                    <button style={{marginDown:"5px"}} className="btn-right btn-info btn-lg mb-3" onClick={this.addCreditCard}>Credit Card Payment</button>
                    </div>
                    <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Credit CardId</th>
                                <th>Card Number</th>
                                <th>Card Holder Name</th>
                                <th>Cvv</th>
                                <th>Expiry Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.creditCards.map(
                                    creditCard =>
                                        <tr key={creditCard.creditCardId}>
                                            <td>{creditCard.creditCardId}</td>
                                            <td>{creditCard.cardNumber}</td>
                                            <td>{creditCard.cardHolderName}</td>
                                            <td>{creditCard.cvv}</td>
                                            <td>{creditCard.expiryDate}</td>
                                            
                                            
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        );
    }

}
export default CreditCard;