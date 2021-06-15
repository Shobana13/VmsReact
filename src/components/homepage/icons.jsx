import React, { Component } from "react";
import { Key } from "react-bootstrap-icons";
class Icons extends Component {
  render() {
    return (
    
      <div class="container" style={{ "text-align": "center" }}>
        <h2 style={{ "text-align": "left" ,"fontFamily":"-moz-initial"}}>Why Ride With Us?</h2>
        <br/>
        <br/>
        <div class="row">
          <div class="col">
            <div class="info_09o1">
              <p class="img">
                <img
                  src="https://www.rentrip.in/assets/images/icons/route.png"
                  alt="no riding limits"
                />
              </p>
              <h4>No Riding Limits</h4>
              <span>Odometer Won't Scare You Anymore.</span>
            </div>
          </div>

          <div class="col">
            <div class="info_09o1">
              <p class="img">
                <img
                  src="https://www.rentrip.in/assets/images/icons/secure-payment.png"
                  alt="secure payment"
                />
              </p>
              <h4>Secure Payments</h4>{" "}
              <span>Our Payment Partners are Industry Leaders.</span>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <div class="row">
          <div class="col">
            <div class="info_09o1">
              <p class="img">
                <img
                  src="https://www.rentrip.in/assets/images/icons/24-hours.png"
                  alt="24 hours"
                />
              </p>
              <h4>No Bullshit</h4>{" "}
              <span>A Day Rent is simply for 24 hrs, We mean it.</span>
            </div>
          </div>
          <div class="col">
            <div class="info_09o1">
              <p class="img">
                <img
                  src="https://www.rentrip.in/assets/images/icons/person.png"
                  alt="verified dealers"
                />
              </p>
              <h4>Verified Dealers</h4>{" "}
              <span>Every Single Dealer is Committed to Quality Service.</span>
            </div>
          </div>
          <div class="col">
            <div class="info_09o1">
              {" "}
              <p class="img">
                <img
                  src="https://www.rentrip.in/assets/images/icons/cash.png"
                  alt="money back Guarantee"
                />
              </p>
              <h4>100% Moneyback</h4>{" "}
              <span>Not Happy With Service, Take Your Money Back.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Icons;
