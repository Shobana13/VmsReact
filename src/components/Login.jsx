import React from "react";
import axios from 'axios'
import Navbar from "./homepage/navbar";
import { connect } from "react-redux";
import {  useHistory } from "react-router";
import { loginUser } from "../actions/userActions";
import Footer from "./homepage/footer";
const { useState } = React;

function Login({user,loginUser}) {
const history= useHistory();
  const [loginDetails, setLoginDetails] = useState({
    emailId: "",
    password: "",
    //userRole:"",
  });

  const submitHandler = async(e) => {
    e.preventDefault();
    // loginUser(loginDetails);
 loginUser(loginDetails)
 if(loginDetails.emailId==="admin123@gmail.com" && loginDetails.password==="admin"){
             
  history.push(`/admin-components`);
   }
   else {
       history.push(`/`);

   }

 

  };
  return (
    
    <div>
    <Navbar/>
    <div className="body">
    <div className="mt-5 ">
    <h1 style={{textAlign:"center"}}><b>Login</b></h1>
      <form onSubmit={submitHandler} style={{ width: "480px", margin: "auto" }}>
        <h4>Email Id</h4>
        <div>
          <label for="emailId" className="sr-only">
            emailId
          </label>
          <input
            type="username"
            class="form-control"
            id="emailId"
            placeholder="emailId"
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, emailId: e.target.value })
            }
            value={loginDetails.emailId}
          />
        </div>
        <div class="mb-3 mt-2">
          <label for="password" class="form-label">
            {" "}
            <h4>Password</h4>
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="password"
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
            value={loginDetails.password}
          />
        </div>
        {/*<div class="mb-3 mt-2">
          <label for="userRole" class="form-label">
            {" "}
            <h2>UserRole</h2>
          </label>
          <select type="userRole"
            class="form-control"
            id="userRole"
            placeholder="userRole"
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, userRole: e.target.value })
            }
            value={loginDetails.userRole}>
            <option>Admin</option>
            <option>Customer</option>
          </select>
          </div>*/}
        
        <div className="mt-2">
      
        <button className="btn btn-primary button-large btn-block">Sign In</button>
        <span className="psw" style={{textAlign:"center"}}><b>New User!<a href="\Register">Signup?</a></b></span>
        </div>
      </form>
    </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    loggedIn: state.user.loggedIn
  }
}
//const mapDispatchToProps = dispatch => {
//   return {
//     loginUser: () => dispatch(loginUser())
//   }
// }
 

<Footer/>

export default connect(
  mapStateToProps,
  {loginUser},
) (Login)
