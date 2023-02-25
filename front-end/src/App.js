import './App.css';
import BaseLogin from './Components/BaseLogin';
import Landing from './Components/Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLogin/>} />
        <Route path="/landing" element={<Landing/> } />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
