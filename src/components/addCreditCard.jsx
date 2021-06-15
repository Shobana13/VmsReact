import React, { Component } from 'react';
import CreditCardService from '../services/creditCardService';
import "../CustomCSS/paymentcss.css";
import NavBar from '../components/homepage/navbar'
import Footer from "./homepage/footer";

class AddCreditCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            creditCardId:this.props.match.params.creditCardId,
            cardNumber:'',
            cardHolderName: '',
            cvv:'',
            expiryDate:'',
        }
        this.changeCreditCardIdHandler=this.changeCreditCardIdHandler.bind(this);
        this.changeCardNumberHandler=this.changeCardNumberHandler.bind(this);
        this.changeCardHolderNameHandler=this.changeCardHolderNameHandler.bind(this);
        this.saveCreditCard=this.saveCreditCard.bind(this);
        this.changeCvvHandler=this.changeCvvHandler.bind(this);
        this.changeExpiryDateHandler=this.changeExpiryDateHandler.bind(this);
       
    }

    saveCreditCard = (e) => {
        e.preventDefault();
        let creditCard={creditCardId:this.state.creditCardId, cardNumber: this.state.cardNumber, cardHolderName: this.state.cardHolderName,cvv: this.state.cvv, expiryDate: this.state.expiryDate};
        console.log('creditCard => '+ JSON.stringify(creditCard));

        CreditCardService.addCreditCard(creditCard).then((res) => {
              this.props.history.push(`/creditCard`);
        });

    }

    changeCreditCardIdHandler=(event) =>{
        this.setState({creditCardId: event.target.value})
    }

    changeCardNumberHandler=(event) =>{
        this.setState({cardNumber: event.target.value})
    }

    changeCardHolderNameHandler=(event) =>{
        this.setState({cardHolderName: event.target.value})
    }

    changeCvvHandler=(event) =>{
        this.setState({cvv: event.target.value})
    }

    changeExpiryDateHandler=(event) =>{
        this.setState({expiryDate: event.target.value})
    }

    cancel(){
        this.props.history.push('/creditCard');
    }

    
    
    
    render() { 
        return (  
            <div><NavBar/>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3 pay-pad">
                            <h3 className="text-center">Credit Card Payment</h3>
                            <div className="card-body">
                                <form>
                                
                                    <div className="form-group">
                                        <label>Card Number :</label>
                                        <input type = "number" placeholder="cardNumber" name="cardNumber" className="form-control payment-input" maxLength="16" value={this.state.cardNumber} onChange={this.changeCardNumberHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Card Holder Name:</label>
                                        <input  placeholder="CardHolderName" name="CardHolderName" className="form-control" value={this.state.cardHolderName} onChange={this.changeCardHolderNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Cvv:</label>
                                        <input placeholder="Cvv" name="Cvv" className="form-control" value={this.state.cvv} onChange={this.changeCvvHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>ExpiryDate:</label>
                                        <input placeholder="ExpiryDate" name="ExpiryDate" className="form-control" value={this.state.expiryDate} onChange={this.changeExpiryDateHandler}/>
                                    </div>
                                    <button className="btn btn-success btn-block" onClick={this.saveCreditCard}><h6>Proceed to Pay</h6></button>
                                    

                                </form><br/><br/>
                                <a class="btn btn-primary" href="\makepayment" role="button">Back</a>
                            </div>
                        </div>
                    </div>
                </div>
<Footer/>
            </div>
        )
    }
}
 
export default AddCreditCard;

/*
<div className="form-group">
                                        <label>Credit Card Id :</label>
                                        <input placeholder="Id" name="creditCardId" className="form-control" value={this.state.creditCardId} onChange={this.changeCreditCardIdHandler}/>
                                </div>
*/