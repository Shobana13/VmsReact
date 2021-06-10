import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import carpark from '../../image/carpark.jpg';
class Company extends Component {
    render() {
        return (
            
            <div class="body">
                
                <h3>LOCATION</h3>
                
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card ">
                            
                            <div class="card-body">
                                
                                <h5 class="card-title " >Company Address</h5>
                                        <h6>Tamil Nadu </h6>
                                        <p class="card-text booking-form"><text>'Square Park 54, 2 Lane, Capgemini Association Limited, Chennai, Tamilnadu-600045'</text></p>
                                        <h6>Andhra Pradesh </h6>
                                        <p class="card-text booking-form">Triangle Park 56, 2 floor, Capgemini Association Limited, Nellore, Andhra Pradesh-600047</p>
                                        
                                
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        
                    </div>
                    <div class="col">
                        <div class="card">
                            
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            
                            <div class="card-body">
                                
                                <button type="button" class="btn btn-success" >Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Company;