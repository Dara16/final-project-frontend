import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';
import NavBar from './components/NavBar';
import CakeContainer from './components/CakeContainer';
import CustomerContainer from './components/CustomerContainer';
import HomePage from './components/HomePage';
import CustomerDetails from './components/CustomerDetails';
import OrderContainer from './components/OrderContainer';
import OrderDetails from './components/OrderDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <NavBar />
        </div>
        
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/cakes">
            <CakeContainer />
          </Route>    
          <Route exact path="/customers">
            <CustomerContainer />
          </Route>
          <Route exact path="/orders">
            <OrderContainer />
          </Route>
          <Route path="/customers/:id">
            <CustomerDetails />
          </Route>
          <Route path="/orders/:id">
            <OrderDetails />
          </Route>
          
        </Switch>  
    </div>
  </Router>
  );
}

export default App;
