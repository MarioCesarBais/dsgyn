import { BrowserRouter } from 'react-router-dom'

import './App.css';
import Logo from '../components/Logo';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Right from '../components/Right';
import Rotas from './Routes'
// import NavBar from '../components/template/NavBar';

export default _ =>
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Banner />
      <Nav />
      <Right />
      {/* <NavBar /> */}
      <div className="content">
        <Rotas />
      </div>
      <Footer />
    </div>
  </BrowserRouter>