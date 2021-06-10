import { Link} from "react-router-dom";
import React from "react";
import "./adminHome.css";
import "bootstrap/dist/css/bootstrap.min.css";

class AdminHome extends React.Component {
  render() {
    return (
      <div>
        <div class="sidebar-container sid">
          <div class="sidebar-logo">
            <h4>Online Vehicle Rental Management System</h4>
          </div>
          <ul class="sidebar-navigation">
            <li class="header" style={{ paddingLeft: "0px" }}>
              <h5>OPERATIONS</h5>
            </li>
            <li>
              <Link to="/customers">
                   Customer
              </Link>
            </li>
            <li>
              <Link to="/address">
                   Address
              </Link>
            </li>
            <li>
              <Link to="/Vehicle">
                   Vehicle
              </Link>
            </li>
            <li>
              <Link to="/Driver">
                   Driver
              </Link>
            </li>
            <li>
              <Link to="/Booking">
                   Booking
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