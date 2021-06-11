import axios from "axios";
import React from "react";
import {Link,useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {registerUser} from '../actions/userActions'
const { useState } = React;
function Register({registerUser}) {
  const history = useHistory();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    emailId: "",
    customerPassword: ""
  });
  const  submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    registerUser(user)
    history.push("/login")
  };

  return (
    <div class="body">
    <div className="mt-5 ">
      <form onSubmit={submitHandler} style={{ width: "480px", margin: "auto" }}>
        <div>
          <label className="mt-2 mb-2" for="firstname" class="form-label">
            {" "}
            FirstName
          </label>
          <input
            type="text"
            class="form-control"
            id="firstname"
            placeholder="firstname"
            onChange={(e) => setUser({ ...user,firstName: e.target.value })}
            value={user.firstName}
          />
          <label className="mt-2 mb-2" for="lastname" class="form-label">
            {" "}
            LastName
          </label>
          <input
            type="text"
            class="form-control"
            id="lastname"
            placeholder="lastname"
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            value={user.lastName}
          />
        
          <label className="mt-2 mb-2" for="mobilenumber" class="form-label">
            {" "}
            Mobile Number
          </label>
          <input
            type="text"
            class="form-control"
            id="mobilenumber"
            placeholder="Mobile"
            onChange={(e) => setUser({ ...user, mobileNumber: e.target.value })}
            value={user.mobileNumber}
          />

          <label for="emailId" className="form-label">
          {" "}
            EmailId
          </label>
          <input
            type="emailId"
            class="form-control"
            id="emailId"
            placeholder="emailId"
            onChange={(e) => setUser({ ...user, emailId: e.target.value })}
            value={user.emailId}
          />
        </div>
        <div class="mb-3 mt-2">
          <label for="password" class="form-label">
            {" "}
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="password"
            onChange={(e) => setUser({ ...user, customerPassword: e.target.value })}
            value={user.customerPassword}
          />
        </div>
        <div className="mt-2">
          <button className="btn btn-primary button-large btn-block">Register</button>
        </div>
      </form>
    </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    user: state.user.user,
    loggedIn: state.user.loggedIn
  }
}


export default connect(mapStateToProps,{registerUser}) (Register);