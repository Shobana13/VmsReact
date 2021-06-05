import './App.css';
//import booking from './components/booking';
import Booking from './components/booking';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ViewBooking from './components/viewBooking';
import AddBooking from './components/addBooking';
import UpdateBooking from './components/updateBooking';
function App() {
  return (
    <Router>
      <div className="container">
    <div className="App">
      <Switch>
      <Route path="/" exact component={Booking}></Route> 
      <Route path="/view-booking/:bookingId" component={ViewBooking}></Route>
      <Route path="/add-booking" component={AddBooking}></Route>
      <Route path="/update-booking/:bookingId" component={UpdateBooking}></Route>
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
