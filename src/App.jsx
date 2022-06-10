import { BrowserRouter } from 'react-router-dom'

import './App.css';
import Logo from './components/Logo';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Right from './components/Right';
import Rotas from './components/Routes'
// import Home from './components/Home';

export default _ =>
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Banner />
      <Nav />
      <Right />
      <div id="content">
        {/* <Home /> */}
        <Rotas />
      </div>
      <Footer />
    </div>
  </BrowserRouter>