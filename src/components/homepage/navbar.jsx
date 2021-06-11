import React from "react";
import {
  List,
  Key,
  PersonCircle,
  Search,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { connect, useSelector } from "react-redux";
import { logoutUser } from "../../actions/userActions";

import { Link } from "react-router-dom"; 

function Navbar({ logoutUser }) {
  const userIsLoggedIn = useSelector((state) => state.user.loggedIn);
  let user = useSelector((state) => state.user.user);

  // let email =  useSelector((state)=>state.user.user.email)

  const handleSubmit = () => {
    let emailId= user.emailId;
    logoutUser(emailId);
  };

  
    return (
      <div>
        <header className="section-header hh">
          <section className="header-main border-bottom sec">
            <div className="container-fluid">
              <div className="row align-items-center box">
                <div className="col-lg-3 col-sm-4 col-md-4 col-5">
                  {" "}
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <a href="#" className="brand-wrap headANDlogo" data-abc="true">
                      <div classNameName="slogan">
                        <span className="logo medtitle" style={{"fontFamily":"-moz-initial"}}>Rental Rides</span>{" "}
                      </div>
                     
                    </a>{" "}
                  </Link>
                </div>
                <div className="col-lg-4 col-xl-5 col-sm-8 col-md-4 d-none d-md-block">
                  <form action="#" className="search-wrap">
                    <div className="input-group w-50">
                      {" "}
                      <input
                        type="text"
                        className="form-control search-form"
                        style={{ width: "40%;" }}
                        placeholder="Search"
                      />
                      <div className="input-group-append">
                        {" "}
                        <button
                          className="btn btn-dark search-button"
                          type="submit"
                        >
                          {" "}
                        <Search />
                        </button>{" "}
                      </div>
                    </div>
                  </form>
                </div>

                <div className="col-lg-2 col-xl-3  col-sm-8 col-md-4 col-7">
                  <div className="d-flex justify-content-end">
                    <button className="btt">
                      {" "}
                      <div className="blink_me"style={{"fontFamily":"-moz-initial"}}>Rentals</div>
                    </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="dropdown drop">
                      <button 
                        className="btn btn-dark dropdown-toggle dropp" type="button" data-toggle="dropdown"><List/></button>
                      <div
                        className="dropdown-menu">
                        <button className="btn dropdown-item indrop" type="button">
                        <a  href="\">
                          Home
                      </a>
                      </button>
                      <button className="btn dropdown-item indrop" type="button">
                        <a  href="\">
                          Categories
                      </a>
                      </button>
                      <button className="btn dropdown-item indrop" type="button">
                        <a  href="\">
                          Profile
                      </a>
                      </button>
                      </div>
                    </div>&nbsp;&nbsp;&nbsp;
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                      <a
                        className="nav-link nav-user-img cartLog"
                        href="#"
                        data-toggle="modal"
                        data-target="#login-modal"
                        data-abc="true"
                      >
                        <span className="login" style={{"fontFamily":"-moz-initial"}}>
                          &nbsp;
                          <Key />
                          <h4>Booking</h4>
                        </span>
                      </a>
                    </Link>&nbsp;&nbsp;&nbsp;
                    <div style={{ display: "flex" }}>
        <Link
          style={{ display: userIsLoggedIn ? "none" : "block" }}
          className="nav-link"
          to="/Login"
        >
          <h4>Login</h4>
        </Link>
        <Link
          style={{ display: userIsLoggedIn ? "none" : "block" }}
          className="nav-link"
          to="/Register"
        >
          <h4>Register</h4>
        </Link>
        <Link
          style={{ display: userIsLoggedIn ? "none" : "block" }}
          className="text"
        >
          <h4>{user && user.customerName}</h4>
        </Link>
        <Link
          onClick={handleSubmit}
          style={{ display: userIsLoggedIn ? "block" : "none" }}
          className="nav-link"
          to="/"
        >Logout
        </Link>
      </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>
      </div>
    );
  }

  const mapStateToProps = (state) => {
    return {
      user: state.user.user,
      loggedIn: state.user.loggedIn,
    };
  };
  
  export default connect(mapStateToProps, { logoutUser })(Navbar);