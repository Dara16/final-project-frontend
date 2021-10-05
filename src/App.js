import React from 'react'
import './App.css';
import CakeContainer from './components/CakeContainer';
import CustomerContainer from './components/CustomerContainer';

function App() {
  return (
    <div className="App">
      <h1>Lydia's Bake Shop</h1>
      <CakeContainer />
      <CustomerContainer />
    </div>
  );
}

export default App;
