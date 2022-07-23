import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faPaperPlane,
  faAddressCard,
  faCalendarDays,
  faFileLines,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import jwt_decode from "jwt-decode";

import Back from "../layout/Back";
import "./nav.css";

function isLoggedIn() {
  const login = localStorage.getItem("login");
  if (!login) {
    localStorage.clear();
    return false;
  }
  const token = JSON.parse(login).token;
  if (!token) {
    localStorage.clear();
    return false;
  }
  let decoded;
  try {
    decoded = jwt_decode(token);
  } catch (e) {
    localStorage.clear();
    decoded = false;
    alert("Token Inválido");
    return false;
  }
  if (decoded) return true;
}

function Nav(props) {
  console.log(props)
  const user = 
    (props && props.state && props.state.user && props.state.user.userLogged) ?
    props.state.user.userLogged : null
  console.log(user)
  const adm = localStorage.adm && isLoggedIn();
  useEffect((user) => {if(!user){}}, [{display: false}])
  useEffect((user) => {if(user && adm){}}, [{display: true}])
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const display = (adm ? '' : 'd-none')

  return (
    <aside className="menu-area">
      <nav className="menu">
        <Link to="/">
          <i className="fa fa-home mt-3"></i> Início
        </Link>
        <Link to="/eventos">
          <FontAwesomeIcon icon={faCalendarDays} /> Eventos
        </Link>
        <Link to="/noticias">
          <FontAwesomeIcon icon={faPaperPlane} /> Notícias
        </Link>
        <Link to="/documentos">
          <FontAwesomeIcon icon={faFileLines} /> Documentos
        </Link>
        <Link to="/artigos">
          <FontAwesomeIcon icon={faNewspaper} /> Artigos
        </Link>
        <Link to="/quemsomos">
          <FontAwesomeIcon icon={faAddressCard} /> Quem Somos
        </Link>

        <div className={`menu-container ${display}`}>
          <button
            className="menu-button btn btn-primary btn-sm mt-3"
            onClick={onClick}
          >
            <FontAwesomeIcon icon={faBars} /> Manutenção
          </button>
        </div>
        <nav
          // ref={dropDownRef}
          className={`${display} menu-dd ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <Link to="/crudeventos"> Eventos</Link>
            </li>
            <li>
              <Link to="/crudnoticias"> Notícias</Link>
            </li>
            <li>
              <Link to="/crudartigos"> Artigos</Link>
            </li>
          </ul>
        </nav>
        <Back></Back>
      </nav>
    </aside>
  );
};

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(Nav)