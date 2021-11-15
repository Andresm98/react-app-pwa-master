import logo from './logo.svg';
import './App.css';
import React from 'react';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";




export default function App() {

  return (
    <div className="main">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 className="main-header">

        Manejo de usuarios API desde (MockAPI) 
        <div>
          {/* Rutas de acceso react v6 */}
          <BrowserRouter>
            <Routes>
              <Route path="/crear" element={<Create />} />
              <Route path="/leer" element={<Read />} />
              <Route path="/actualizar" element={<Update />} />
              {/* default root */}
              <Route path="/" element={<Read />} />
            </Routes>
          </BrowserRouter>
        </div>
      
      </h2>
    </div>
  );
}


