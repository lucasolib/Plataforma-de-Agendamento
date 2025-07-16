import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './src/pages/Home'
import Login from './src/pages/Login'
import './src/themes/App.css'

function App() {
  return (
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
  )
}

export default App
