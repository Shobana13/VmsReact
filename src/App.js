import logo from './logo.svg';
import './App.css';
import Payment from './components/payment';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ViewPayment from './components/viewPayment';
import UpdatePayment from './components/updatePayment';
import AddPayment from './components/addPayment';
import Login from "./components/login";
import Nav from "./components/nav";
import Home from "./components/home";
import Counter from "./components/counter";
import Payments from "./components/payments";

function App() {

  return (
    <Router>
      <div>
        <Nav />
        <div className="container">
          <div className="App">
            <Switch>
              <Route path="/" exact component={Payment}></Route>
              <Route path="/add-payment" component={AddPayment}></Route>
              <Route path="/view-payment/:paymentId" component={ViewPayment}></Route>
              <Route path="/update-payment/:paymentId" component={UpdatePayment}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/counter" component={Counter}></Route>
              <Route path="/" exact component={Home}></Route>
              <Route path="/payments" component={Payments}></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

//<Route path = "/view-payment/:paymentId" component = {ViewPayment}></Route>