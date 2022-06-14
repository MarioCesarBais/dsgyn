import { Link } from 'react-router-dom'

import eventos from '../../data/eventos.json'
import Card from '../../layout/Card'

const eventosLI = eventos.map(evento =>
    <div className="border border-dark rounded w-100 p-1 m-1">
    <Link to="/mat" state={evento} key={evento.manchete}>{evento.data} --- {evento.manchete}</Link>
    </div>
)

export default () =>
    <div className="Cards">
        <Card titulo="Eventos" color="#3A9AD9">
            <div>{eventosLI}</div>
            <Link to="/eventos">Mais eventos</Link>
        </Card>
    </div>