import { BrowserRouter } from 'react-router-dom'

import './App.css';
import Logo from './components/Logo';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Right from './components/Right';
import Rotas from './components/Routes'
import Back from './layout/Back'

export default _ =>
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Banner />
      <Nav />
      <Right />
      <div className="content">
        <Back />
        <Rotas />
        <Back />
      </div>
      <Footer />
    </div>
  </BrowserRouter>