import React from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/userActions";

function Navbar({ logoutUser }) {
  const userIsLoggedIn = useSelector((state) => state.user.loggedIn);
  let user = useSelector((state) => state.user.user);

  // let email =  useSelector((state)=>state.user.user.email)

  const handleSubmit = () => {
    let emailId= user.emailId;
    logoutUser(emailId);
  };

  return (
    <nav
      style={{ alignItems: "center" }}
      className="navbar navbar-navbar-expand-xxl navbar-light bg-light"
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link className="navbar-brand">
          <h2>VEHICLE RENTALS</h2>
        </Link>
        <Link className="nav-link" to="/">
          <h3>Home</h3>
        </Link>
      </div>
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
    </nav>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    loggedIn: state.user.loggedIn,
  };
};

export default connect(mapStateToProps, { logoutUser })(Navbar);