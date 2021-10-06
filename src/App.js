import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import CakeContainer from './components/CakeContainer';
import CustomerContainer from './components/CustomerContainer';
import HomePage from './components/HomePage';

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
        </Switch>  
    </div>
  </Router>
  );
}

export default App;
