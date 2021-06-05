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


function App() {
  return (
    <Router>
      <div className="container">
       <div className="App">
         <Switch>
           <Route path = "/" exact component = {Customer}></Route>
           <Route path="/customers" component={Customer}></Route>
           <Route path ="/view-customers/:customerId" component ={ViewCustomer}></Route>
           <Route path="/add-customer" component = {CreateCustomer}></Route>
           <Route path="/update-customers/:customerId" component = {UpdateCustomer}></Route>
           <Route path="/address" component={Address}></Route>
           <Route path="/add-address" component = {CreateAddress}></Route>
           <Route path="/update-address/:addressId" component = {UpdateAddress}></Route>
           
         </Switch>
        </div>
        </div>
      </Router>
    
  );
}

export default App;
