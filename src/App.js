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


function App() {
  return (
    <Router>
      
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
           </div>
         </Switch>
        
      </Router>
    
  );
}

export default App;
