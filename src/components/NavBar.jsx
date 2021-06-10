import React from "react";
import {
  Key,
  PersonCircle,
  Search,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { Link } from "react-router-dom"; 


class Navbar extends React.Component {
  render() {
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
                    <div className="input-group w-100">
                      {" "}
                      <input
                        type="text"
                        className="form-control search-form"
                        style={{ width: "55%;" }}
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

                <div className="col-lg-5 col-xl-4 col-sm-8 col-md-4 col-7">
                  <div className="d-flex justify-content-end">
                    <button className="btt">
                      {" "}
                      <div className="blink_me"style={{"fontFamily":"-moz-initial"}}>Rentals</div>
                    </button>
                    <div className="dropdown drop">
                      <button
                        className="btn btn-dark dropdown-toggle dropp" type="button" data-toggle="dropdown"> More</button>
                      <div
                        className="dropdown-menu">
                        <button className="btn dropdown-item indrop" type="button">
                          Comfortable Rides
                        </button>
                        <button className="dropdown-item indrop" type="button">
                          24x7 Customer Care
                        </button>
                        <button className="dropdown-item indrop" type="button">
                          Our Services
                        </button>
                      </div>
                    </div>
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                      <a
                        className="nav-link nav-user-img cartLog"
                        href="#"
                        data-toggle="modal"
                        data-target="#login-modal"
                        data-abc="true"
                      >
                        <span className="login" style={{"fontFamily":"-moz-initial"}}>
                          <Key />
                          Booking
                        </span>
                      </a>
                    </Link>
                    <Link to="login/_add" style={{ textDecoration: "none" }}>
                      <a
                        className="nav-link nav-user-img cartLog"
                        href="#"
                        data-toggle="modal"
                        data-target="#login-modal"
                        data-abc="true"
                      >
                        <span className="login" style={{"fontFamily":"-moz-initial"}}>
                          <PersonCircle />
                          &nbsp; LOGIN
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>
      </div>
    );
  }
}

export default Navbar;