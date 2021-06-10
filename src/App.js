import logo from './logo.svg';
import './App.css';
import Payment from './components/payment';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ViewPayment from './components/viewPayment';
import UpdatePayment from './components/updatePayment';
import AddPayment from './components/addPayment';
import Login from "./components/login";
import NavBar from "./components/NavBar";
import Home from "./components/home";
import Counter from "./components/counter";
import Payments from "./components/payments";
//import PaymentFrontEnd from "./components/paymentFrontEnd/paymentFrontEnd";
import Paymentjs from "./components/paymentjs";
import Nav from "./components/nav";
//import Booking from './components/booking';
//import AddBooking from './components/addBooking';
//import AddBooking2 from './components/addBooking2';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <div> <NavBar/></div>
      <div className="container">
        <div className="App">
          <Route path="/" exact component={Payment}></Route>          
        </div>
      </div>
      <div>
        
        <Switch>          
          <Route path="/add-payment" component={AddPayment}></Route>          
          <Route path="/view-payment/:paymentId" component={ViewPayment}></Route>
          <Route path="/update-payment/:paymentId" component={UpdatePayment}></Route>
          <Route path="/makepayment" component={Paymentjs}></Route>
        </Switch>
      </div>
      <Footer/>

    </Router>
  );
}

export default App;

/*<Route path = "/view-payment/:paymentId" component = {ViewPayment}></Route>
<NavBar /> <div className="container"> <div className="App"></div>
<Route path="/login" component={Login}></Route>
          <Route path="/counter" component={Counter}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="/payments" component={Payments}></Route>
          <Route path="/add-booking" component={AddBooking}></Route>
          <Route path="/add-booking2" component={AddBooking2}></Route>
          <Route path="/booking" exact component={Booking}></Route>
          <Route path="/paymentfrontend" exact component={PaymentFrontEnd}></Route>
*/
