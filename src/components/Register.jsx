import axios from "axios";
import React from "react";
import {Link,useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {registerUser} from '../actions/userActions'
<<<<<<< HEAD
import Navbar from "./homepage/navbar";
import Footer from "../components/homepage/footer"
=======
import Navbar from '../components/homepage/navbar'
import Footer from "./homepage/footer";
>>>>>>> 1b8939dc07cbbb155a1aa3cf2f8dded49fd001e1
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
    <div class="body1">
      <Navbar/>
    <div className="mt-5 ">
      <h1 style={{textAlign:"center"}}><b>Register</b></h1>
      <form onSubmit={submitHandler} style={{ width: "480px", margin: "auto" }}>
        
        <div>

          <label className="mt-2 mb-2" for="firstname" class="form-label">
            {" "}
            <b>FirstName</b>
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
            <b>LastName</b>
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
            <b>Mobile Number</b>
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
            <b>Email</b>
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
           <b>Password</b>
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
          <span><b>Already an User!<a href="\login">SignIn?</a></b></span>
        </div>
      </form>
      <br/>
      <br/>
    </div>
    <Footer/>
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