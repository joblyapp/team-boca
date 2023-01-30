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
import Admin from "./app/pages/Admin/Admin";



function App() {

  let token = localStorage.getItem('token')
  console.log("soy tokennn" + token)

  return (
    <div className="App">
      {
        token?
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="admin" element={<Admin/>}/>
          <Route path="*" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    :
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="login" element={<Login/>} />
          <Route path="olvide-password" element={<OlvidePassword/>} />
          <Route path="olvide-password/:token" element={<NuevaPassword/>} />
          <Route exact path="/confirm-account/:token" element={<ConfirmAcc/>}/>
          <Route path="*" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
    }
    </div>
  );
}

export default App;
