import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { createStore} from 'redux';
//import allReducers from './reducers/index';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
//import thunk from "redux-thunk";
import store from './redux/store';
import './CustomCSS/logincss.css';
import './CustomCSS/vehiclecss.css';

//import $ from 'jquery';
//import Popper from 'popper.js';
//import 'bootstrap/dist/js/bootstrap.bundle.min';



// Display store in console
//store.subscribe(() => console.log(store.getState()));

// Use Provider to hook store to app
ReactDOM.render(
  <React.StrictMode>
 <Provider store={store}>
 <App />
 </Provider>
  </React.StrictMode>,
  document.getElementById("root")
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();