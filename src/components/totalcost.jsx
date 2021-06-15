import React, { Component } from 'react';
import NavBar from '../components/homepage/navbar';

class TotalCost extends Component{

    constructor(props){
        super(props)
        this.state={
            bookingId:this.props.match.params.bookingId,
            totalcost:''
        }

        
    }

        changeTotalCostHandler=(event) =>{
        this.setState({totalcost: event.target.value})
        }

        changeBookingIdHandler=(event) =>{
        this.setState({bookingId: event.target.value})
        }

        cancel(){
        this.props.history.push('/booking');
        }

    render(){
        return(
            <div>
            <NavBar/>
            <br></br>
            <br></br>
            <br></br>
            <div className="jumbotron" style={{width:"500px", marginLeft:"350px"}}>
                
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                        <h1 className="text-center">Total Cost</h1>
                        <h4>Total cost for booking the vehicle is: </h4>
                        <div className="card-body">
                           
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }

}

export default TotalCost;