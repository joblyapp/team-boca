import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./app/pages/Home/Home"
import Register from './app/pages/Register/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="register" element={<Register/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
