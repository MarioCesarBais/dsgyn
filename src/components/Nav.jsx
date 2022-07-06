import { Link } from "react-router-dom";
// import { useRef } from "react";
// import { fatypewriter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faPaperPlane,
  faAddressCard,
  faCalendarDays,
  faFileLines,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import Back from "../layout/Back";
import "./nav.css";
import { useState } from "react";
import { useOutsideClick } from "../utils/utils";

export default (props) => {
  // const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  // console.log(isActive);

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

        <div className="menu-container">
        <button
          className="menu-button btn btn-primary btn-sm mt-3"
          onClick={onClick}
        >
          <FontAwesomeIcon icon={faBars} /> CRUD
        </button>
        </div>
        <nav
            // ref={dropDownRef}
            className={`menu-dd ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <Link to="/crud" state='eventos'> Eventos</Link>
            </li>
            <li>Notícias</li>
            <li>Artigos</li>
          </ul>
        </nav>
        <Back></Back>
      </nav>
    </aside>
  );
};
