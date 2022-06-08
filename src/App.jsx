import { BrowserRouter } from 'react-router-dom'

import './App.css';
import Logo from './components/Logo';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Right from './components/Right';
import Home from './components/Home';

export default _ => (
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Banner />
      <Nav />
      <Right />
      <Home />
      {/* <Routes />  */}
      <Footer />
    </div>
  </BrowserRouter>
)