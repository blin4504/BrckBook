import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/signup.js';
import Login from './pages/login.js';
import Landing from './pages/landing.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="landing" element={<Landing />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
