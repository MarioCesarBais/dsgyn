// import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

// import Login from "./Login";
// import Home from "./Home";
// import Header from "./Header";
// import Register from "./Register";

import './App.css';
import Logo from '../components/Logo';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Right from '../components/Right';
import Rotas from './Routes'
import Log from '../components/template/log/Log';

export default _ => {
  // const [logoutUser, setLogoutUser] = useState(false);
  return (
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Banner />
      <Nav />
      <Right />
      <Log />
      <div className="content">
        <Rotas />
      </div>
      <Footer />
    </div>
  </BrowserRouter>
  )
}