import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import carpark from '../../image/carpark.jpg';
class CompanyLocation extends Component {
    render() {
        return (
            <div class="body">
            <div>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-5 offset-md-2 offset-md-1">
                            <h3 className="text-center">Vehicle pick-up address</h3>
                            <div class="left">
                                <div class="card">
                                    <div class="card-body ">
                                        <img src={carpark} alt="image" width="150" height="100" />
                                        <h5 class="card-title " >Company Address</h5>
                                        <h6>Tamil Nadu chennai</h6>
                                        <p class="card-text"><text>'Square Park 54, 2 Lane, Capgemini Association Limited, Chennai, Tamilnadu-600045'</text></p>
                                        <h6>Andhra Pradesh Nellore</h6>
                                        <p class="card-text">Triangle Park 56, 2 floor, Capgemini Association Limited, Nellore, Andhra Pradesh-600047</p>
                                        <h6>Karnataka Bangaluru</h6>
                                        <p class="card-text">Street Road Park 54, 5 Lane, Capgemini Association Limited, Bangaluru, Karnataka-600046</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="caed col-md-6">

                            <h3 className="text-center">Vehicle pick-up address</h3>
                            <div class="left">
                                <div class="card">
                                    <div class="card-body ">
                                        <div class="input-group input-daterange ">
                                            <DateRangePicker

                                                themeVariant="dark"
                                                initialSettings={{ startDate: '01/01/2020', endDate: '01/15/2020' }}
                                            >
                                                <input type="text" className="form-control" />
                                            </DateRangePicker>
                                        </div>

                                        <button type="button" class="btn btn-success" >Pay Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        )



    }




}

export default CompanyLocation;
