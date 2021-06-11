import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginAction, logoutAction } from "../actions/login_actions";

const Login = () => {
  const isLogged = useSelector((state) => state.login);
  const dispatch = useDispatch();
  return (
    <div>
      {isLogged ? <h1>Yes</h1> : <h1>No</h1>}
      <button onClick={() => dispatch(loginAction())}>Login</button>
      <button onClick={() => dispatch(logoutAction())}>Logout</button>
    </div>
  );
};

export default Login;