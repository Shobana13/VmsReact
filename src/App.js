import logo from './logo.svg';
import './App.css';
import Customer from './components/customer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ViewCustomer from './components/viewCustomer';
import CreateCustomer from './components/createCustomer';
import UpdateCustomer from './components/updateCustomer';
import Address from './components/address';
import CreateAddress from './components/createAddress';
import AddAddress from './components/addAddress';
import UpdateAddress from './components/updateAddress';
import ViewAddress from './components/viewAddress';
import VehicleHomePage from './components/homepage/vehicleHomepage';
import AdminHome from './components/adminComponent/adminHome';
import Vehicle from './components/vehicle';
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
import Location from './components/location';
import CompanyLocation from './components/companyLocation';
import LucknowLocation from './components/lucknowLocation';
import ChennaiLocation from './components/chennaiLocation';
import BengaluruLocation from './components/bengaluruLocation';
import DelhiLocation from './components/delhiLocation';
import MumbaiLocation from './components/mumbaiLocation';
import Company from './components/company';
import Suv from './components/suv';
import Sedan from './components/sedan'
import MiniBus from './components/miniBus'
import Coach from './components/coach'
import Hatchback from './components/hatchback'
import Footer from './components/homepage/footer';
import { loadUser } from './actions/userActions'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Payment from './components/payment';
import ViewPayment from './components/viewPayment';
import UpdatePayment from './components/updatePayment';
import AddPayment from './components/addPayment';
import Payments from "./components/payments";
import PaymentPage from "./components/paymentPage";
import Booking from './components/booking';
import ViewBooking from './components/viewBooking';
import AddBooking from './components/addBooking';
import UpdateBooking from './components/updateBooking';
import AdBooking from './components/adBooking';
import CreditCard from './components/creditCard';
import AddCreditCard from './components/addCreditCard';

import TotalCost from './components/totalcost';
import BookingHome from './components/BookingHome';


let emailId
if (localStorage.getItem('emailId')) {
  emailId = localStorage.getItem('emailId')
  console.log(emailId)
}
function App() {
  return (

    <Router>
      <Switch>

        <Route path="/admin-components" component={AdminHome}></Route>
        <Route path="/customers" component={Customer}></Route>
        <Route path="/vehicle" exact component={Vehicle}></Route>
        <Route path="/driver" exact component={Driver}></Route>
        <Route path="/payment" exact component={Payment}></Route>
        <Route path="/booking" exact component={Booking}></Route>


        <Route path="/" exact component={VehicleHomePage}></Route>


        <div className="body1" style={{ height: "100%" }}>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/view-customers/:customerId" component={ViewCustomer}></Route>

        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/view-customers/:customerId" component={ViewCustomer}></Route>

          <Route path="/add-customer" component={CreateCustomer}></Route>
          <Route path="/update-customers/:customerId" component={UpdateCustomer}></Route>
          <Route path="/add-address" component={CreateAddress}></Route>
          <Route path="/add-address1" component={AddAddress}></Route>
          <Route path="/update-address/:addressId" component={UpdateAddress}></Route>
          <Route path="/view-address/:addressId" component={ViewAddress}></Route>


          <Route path="/vehicledetails" component={VehicleDetails}></Route>
          <Route path="/vehiclehome" component={VehicleHome}></Route>
          <Route path="/driverhome" component={DriverHome}></Route>
          <Route path="/location" component={Location}></Route>
          <Route path="/lucknowlocation" component={LucknowLocation}></Route>
          <Route path="/companyLocation" component={CompanyLocation}></Route>
          <Route path="/chennaiLocation" component={ChennaiLocation}></Route>
          <Route path="/bengaluruLocation" component={BengaluruLocation}></Route>
          <Route path="/delhiLocation" component={DelhiLocation}></Route>
          <Route path="/mumbaiLocation" component={MumbaiLocation}></Route>
          <Route path="/company" component={Company}></Route>
          <Route path="/suv" component={Suv}></Route>
          <Route path="/hatchback" component={Hatchback}></Route>
          <Route path="/sedan" component={Sedan}></Route>
          <Route path="/miniBus" component={MiniBus}></Route>
          <Route path="/coach" component={Coach}></Route>
          <Route path="/add-vehicle" component={AddVehicle}></Route>
          <Route path="/view-vehicle/:vehicleId" component={ViewVehicle}></Route>
          <Route path="/update-vehicles/:vehicleId" component={Update}></Route>
          <Route path="/add-driver" component={AddDriver}></Route>
          <Route path="/view-driver/:driverId" component={ViewDriver}></Route>
          <Route path="/update-drivers/:driverId" component={UpdateDriver}></Route>
          <Route path="/add-payment" component={AddPayment}></Route>
          <Route path="/view-payment/:paymentId" component={ViewPayment}></Route>
          <Route path="/update-payment/:paymentId" component={UpdatePayment}></Route>
          <div className="body1">
          <Route path="/makepayment" component={PaymentPage}></Route>
          </div>
          
          <Route path="/view-booking/:bookingId" component={ViewBooking}></Route>
          <Route path="/add-booking" component={AddBooking}></Route>
          <Route path="/update-booking/:bookingId" component={UpdateBooking}></Route>
          <Route path="/ad-booking" component={AdBooking}></Route>


          <Route path="/creditcard" component={CreditCard}></Route>
          <Route path="/add-creditcard" component={AddCreditCard}></Route>
         
          <Route path="/totalcost" component={TotalCost}></Route>
          <Route path="/bookinghome" component={BookingHome}></Route>
        </div>
      </Switch>      
    </Router>
  );
}

export default App;

