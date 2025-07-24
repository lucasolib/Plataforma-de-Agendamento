import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Registro from './src/pages/Registro';
import './src/themes/App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/registro" element={ <Registro /> } />
      </Routes>
  )
}

export default App
