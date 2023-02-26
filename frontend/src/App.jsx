import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import SignUp from './pages/signUp'
import Login from './pages/login'
import Landing from './pages/landing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<Landing />} />

      </Routes>
    </BrowserRouter>
  )
    
}

export default App
