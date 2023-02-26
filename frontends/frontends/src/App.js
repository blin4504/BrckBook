import './App.css';
import BaseLogin from './Components/BaseLogin';
import Landing from './Components/Landing';
import ProfileIcon from './Components/ProfileIcon';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Genre from './Components/Genre';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLogin/>} />
        <Route path="/profile-pick" element={<ProfileIcon />} />
        <Route path="/genre" element={<Genre/>} />
        <Route path="/landing" element={<Landing/> } />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
