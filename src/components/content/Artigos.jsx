import { Link } from 'react-router-dom'
import artigos from '../../data/artigos.json'
import Card from '../../layout/Card'

const artigosLI = artigos.map(artigo =>
    <div className="border border-dark rounded w-100 p-1 m-1">
        <Link to="/mat" state={artigo} key={artigo.manchete}>{artigo.data} --- {artigo.manchete}</Link>
    </div>
)
  
export default () =>
    <div className="Cards">
        <Card titulo="Artigos" color="#3A9AD9">
            <div>{artigosLI}</div>
            <Link to="/artigos">Mais artigos</Link>
        </Card>
    </div>