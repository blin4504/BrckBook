import './App.css';
import BaseLogin from './Components/BaseLogin';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLogin/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
