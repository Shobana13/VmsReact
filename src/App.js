import logo from './logo.svg';
import './App.css';
import Vehicle from './components/vehicle';
import{BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AddVehicle from './components/addVehicle';
import ViewVehicle from './components/viewVehicle';
import Update from './components/update';
import Driver from './components/driver';
import AddDriver from './components/addDriver';
import ViewDriver from './components/viewDriver';
import UpdateDriver from './components/updateDriver';

function App() {

  return (
      <Router>
        <div>
        <div className="container">
          <div className="App">
            <Switch>
               <Route path ="/" exact component={Vehicle}></Route>
               <Route path="/add-vehicle" component = {AddVehicle}></Route>
               <Route path ="/view-vehicle/:vehicleId" component ={ViewVehicle}></Route>
               <Route path="/update-vehicles/:vehicleId" component = {Update}></Route>
               <Route path ="/driver" exact component={Driver}></Route>
               <Route path="/add-driver" component = {AddDriver}></Route>
               <Route path ="/view-driver/:driverId" component ={ViewDriver}></Route>
               <Route path="/update-drivers/:driverId" component = {UpdateDriver}></Route>
            </Switch>
            </div>
          </div>
        </div>
      </Router>
  );
}

export default App;
//<Route path="/vehicles" component={Vehicle}></Route>