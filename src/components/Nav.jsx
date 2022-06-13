import { Link } from 'react-router-dom'
// import { fatypewriter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faPaperPlane, faAddressCard, faCalendarDays, faFileLines } from '@fortawesome/free-solid-svg-icons'

import './nav.css';

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa! */}
            <Link to="/">
                <i className="fa fa-home"></i> Início
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
                <FontAwesomeIcon icon={faNewspaper}/> Artigos
            </Link>
            <Link to="/quemsomos">
                <FontAwesomeIcon icon={faAddressCard} /> Quem Somos
            </Link>
        </nav>
    </aside>