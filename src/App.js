import './App.css';
//import booking from './components/booking';
import Booking from './components/booking';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ViewBooking from './components/viewBooking';
import AddBooking from './components/addBooking';
import UpdateBooking from './components/updateBooking';
import BookingFrontEnd from './components/bookingfrontend/bookingfrontend';
import CompanyLocation from './components/bookingfrontend/companyLocation';
import YourLocation from './components/bookingfrontend/yourLocation';
import Company from './components/bookingfrontend/company';
import BookingNew from './components/bookingfrontend/bookingnew';
import AdBooking from './components/adBooking';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <div>
        <NavBar/>
      <div className="container">
    <div className="App">
    <Route path="/" exact component={Booking}></Route>
    </div>
    </div>
    <div>
      <Switch>
       
      <Route path="/view-booking/:bookingId" component={ViewBooking}></Route>
      <Route path="/add-booking" component={AddBooking}></Route>
      <Route path="/update-booking/:bookingId" component={UpdateBooking}></Route>
      <Route path="/bookingfrontend" component={BookingFrontEnd}></Route>
      <Route path="/companylocation" component={CompanyLocation}></Route>
      <Route path="/yourlocation" component={YourLocation}></Route>
      <Route path="/company" component={Company}></Route>
      <Route path="/bookingnew" component={BookingNew}></Route>
      <Route path="/ad-booking" component={AdBooking}></Route>
      
      </Switch>
      </div>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
