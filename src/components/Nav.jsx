import { Link } from 'react-router-dom'
// import { fatypewriter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faPaperPlane, faAddressCard, faCalendarDays, faFileLines } from '@fortawesome/free-solid-svg-icons'

import './nav.css';

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/eventos" n={Infinity}> 
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
            <Link to='/crud'>CRUD</Link>
        </nav>
    </aside>