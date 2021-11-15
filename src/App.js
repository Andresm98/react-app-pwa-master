import logo from './logo.svg';
import './App.css';
import React from 'react';
import Create from './components/create';

function App() {
  return (
    <div className="main">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 className="main-header">
        Manejo de usuarios API
        <Create />
      </h2>
    </div>
  );
}

export default App;
