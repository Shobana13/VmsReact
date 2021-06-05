import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" NavLink="/">
          Payment
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" NavLink="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" NavLink="/posts">
                posts
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" NavLink="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" NavLink="/register">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;