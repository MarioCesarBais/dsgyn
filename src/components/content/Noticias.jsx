import { Link } from 'react-router-dom'

import noticias from '../../data/noticias.json'
import Card from '../../layout/Card'


const noticiasLI = noticias.map(noticia =>
    <div className="border border-dark rounded w-100 p-1 m-1">
    <Link to="/mat" state={noticia} key={noticia.manchete}>{noticia.data} --- {noticia.manchete}</Link>
    </div>
)

export default () =>
    <div className="Cards">
        <Card titulo="noticias" color="#3A9AD9">
            <div>{noticiasLI}</div>
            <Link to="/noticias">Mais noticias</Link>
        </Card>
    </div>