import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const counter = useSelector((state) => state.counter);
  const isLoggedIn = useSelector((state) => state.login);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h1>isLogged {isLoggedIn ? <h3>Yes</h3> : <h3>No</h3>}</h1>
    </div>
  );
};

export default Home;