import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./app/pages/Home/Home"
import Register from './app/pages/Register/Register';
import Login from './app/pages/Login/Login';
import Profile from './app/components/profile/Profile';
import ConfirmAcc from './app/components/confirmAcc/ConfirmAcc';
import OlvidePassword from './app/pages/OlvidePassword/OlvidePassword';
import NuevaPassword from './app/pages/NuevaPassword/NuevaPassword';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="register" element={<Register/>} />
          <Route path="login" element={<Login/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="olvide-password" element={<OlvidePassword/>} />
          <Route path="olvide-password/:token" element={<NuevaPassword/>} />
          <Route exact path="/confirm-account/:token" element={<ConfirmAcc/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
