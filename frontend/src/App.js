import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./app/pages/Home/Home"
import Register from './app/pages/Register/Register';
import Login from './app/pages/Login/Login';
import Profile from './app/components/profile/Profile';
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
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
