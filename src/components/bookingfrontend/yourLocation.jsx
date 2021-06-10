import React, { Component } from 'react';
import 'bootstrap-daterangepicker/daterangepicker.css';
class YourLocation extends Component {
    render() {
        return (
            
                <div>

                    <div className="container">
                        <div className="row">
                            <div className="caed col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center booking-cta h1 h3">Pick-up Address</h3>

                                <div class="card">

                                    <div class="card-body">

                                        <form class="row g-3">
                                            <div class="col-md-6">
                                                <label for="firstname" class="form-label">First Name</label>
                                                <input type="text" class="form-control" id="inputfirstname" />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="lastname" class="form-label">Last Name</label>
                                                <input type="text" class="form-control" id="inputlastname" />
                                            </div>
                                            <div class="col-12">
                                                <label for="inputAddress" class="form-label">Address Line 1</label>
                                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                            </div>
                                            <div class="col-12">
                                                <label for="inputAddress2" class="form-label">Address Line 2</label>
                                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputCity" class="form-label">City</label>
                                                <input type="text" class="form-control" id="inputCity" />
                                            </div>
                                            <div class="col-md-3">
                                                <label for="inputState" class="form-label">State</label>
                                                <select id="inputState" class="form-select">
                                                    <option selected>Choose</option>

                                                    <option>Tamil Nadu</option>
                                                    <option>Andhra Pradesh</option>
                                                    <option>Karnataka</option>
                                                    <option>Kerala</option>
                                                </select>
                                            </div>
                                            <div class="col-md-5">
                                                <label for="inputZip" class="form-label">Zip</label>
                                                <input type="text" class="form-control" id="inputZip" />
                                            </div>


                                            <div class="col-12">
                                                <button type="paynow" class="btn btn-success">Pay Now</button>
                                            </div>
                                        </form>


                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            


        )



    }




}

export default YourLocation;

//<img src="https://picsum.photos/seed/picsum/300/300" alt="image" width="250" height="100" />