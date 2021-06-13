import { Link} from "react-router-dom";
import React from "react";
import "./adminHome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../homepage/navbar";
import { JournalArrowDown, PencilFill, PersonBoundingBox, PersonSquare, Truck, Wallet2 } from "react-bootstrap-icons";


class AdminHome extends React.Component {
  render() {
    return (
    
      <div>
        <Navbar/>
        <div class="sidebar-container sid">
          <ul class="sidebar-navigation">
            <li class="header" style={{ paddingLeft: "0px" }}>
              <h5>DASHBOARD</h5>
            </li>
            <li>
              <Link to="/customers">
                   <b><PersonBoundingBox/>&nbsp;Customer</b>
              </Link>
            </li>
            <li>
              <Link to="/address">
                  <b><PencilFill/>&nbsp;Address</b>
              </Link>
            </li>
            <li>
              <Link to="/vehicle">
                  <b><Truck/>&nbsp;Vehicle</b>
              </Link>
            </li>
            <li>
              <Link to="/driver">
                   <b><PersonSquare/>&nbsp;Driver</b>
              </Link>
            </li>
            <li>
              <Link to="/booking">
                   <b><JournalArrowDown/>&nbsp;Booking</b>
              </Link>
            </li>
            <li>
              <Link to="/payment">
                   <b><Wallet2/>&nbsp;Payment</b>
              </Link>
            </li>
            
          </ul>
        </div>

        <div class="content-container">
          <div class="container-fluid">
            <div class="jumbotron jj">
              <h1>ADMIN</h1>
              <p>
              Administrator can add/modify the vehicle details, approve / reject the vehicles to the customers, view vehicles, view customers, view booking requests, view details of vehicles rented and payment details.

              </p>
            
              <p>
                <Link
                  to="/"
                  class="btn btn-lg btn-primary"
                  // href="../../components/#navbar"
                  role="button"
                >
                  VIEW CLIENT-PAGE &raquo;
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    
    );
  }
}

export default AdminHome;