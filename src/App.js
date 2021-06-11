import logo from './logo.svg';
import './App.css';
import Customer from './components/customer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ViewCustomer from './components/viewCustomer';
import CreateCustomer from './components/createCustomer';
import UpdateCustomer from './components/updateCustomer';
import Address from './components/address';
import CreateAddress from './components/createAddress';
import UpdateAddress from './components/updateAddress';
import ViewAddress from './components/viewAddress';
import VehicleHomePage from './components/homepage/vehicleHomepage';
import AdminHome from './components/adminComponent/adminHome';
import NavBar from './components/NavBar';
import Vehicle from './components/vehicle';
import{BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AddVehicle from './components/addVehicle';
import ViewVehicle from './components/viewVehicle';
import Update from './components/update';
import Driver from './components/driver';
import AddDriver from './components/addDriver';
import ViewDriver from './components/viewDriver';
import UpdateDriver from './components/updateDriver';
import Login from './components/Login';
import Register from './components/Register';
import VehicleHome from './components/VehicleHome';
import DriverHome from './components/DriverHome';
import VehicleDetails from './components/vehicleDetails';
import Footer from './components/Footer';
import {loadUser} from './actions/userActions'
import {useEffect} from 'react'
import { Container } from 'react-bootstrap';
let emailId
if(localStorage.getItem('emailId')){
  emailId=localStorage.getItem('emailId')
  console.log(emailId)
}
function App() {
  return (
    <Router><div className="container">
    <div className="App">
    <Route path ="/" exact component={Vehicle}></Route>
    <Route path ="/driver" exact component={Driver}></Route>
    </div>
    </div>
      
         <Switch>
           <Route path = "/" exact component = {VehicleHomePage}></Route>
           <div className="container">
           <Route path ="/customers" component={Customer}></Route>
           <Route path ="/view-customers/:customerId" component ={ViewCustomer}></Route>
           <Route path ="/add-customer" component = {CreateCustomer}></Route>
           <Route path ="/update-customers/:customerId" component = {UpdateCustomer}></Route>
           <Route path ="/address" component={Address}></Route>
           <Route path ="/add-address" component = {CreateAddress}></Route>
           <Route path ="/update-address/:addressId" component = {UpdateAddress}></Route>
           <Route path ="/view-address/:addressId" component ={ViewAddress}></Route>
           <Route path="/admin-components" component={AdminHome}></Route>

               <Route path ="/vehicledetails" component={VehicleDetails}></Route>
               <Route path ="/vehiclehome" component={VehicleHome}></Route>
               <Route path ="/driverhome" component={DriverHome}></Route>
               
               <Route path="/add-vehicle" component = {AddVehicle}></Route>
               <Route path ="/view-vehicle/:vehicleId" component ={ViewVehicle}></Route>
               <Route path="/update-vehicles/:vehicleId" component = {Update}></Route>
               <Route path="/add-driver" component = {AddDriver}></Route>
               <Route path ="/view-driver/:driverId" component ={ViewDriver}></Route>
               <Route exact path='/login' component={Login}/>
               <Route exact path='/register' component={Register}/>
               <Route path="/update-drivers/:driverId" component = {UpdateDriver}></Route>
           </div>
         </Switch>
         <br/>
          <br/>
          <Footer/>
        
      </Router>
    
  );
}

export default App;
