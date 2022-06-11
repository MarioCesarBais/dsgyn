import noticias from '../../data/noticias.json'
import Card from '../../layout/Card'

const noticiasLI = noticias.map((noticia) =>
    <button className="btn btn-primary btn-sm border border-dark rounded w-100 my-1" key={noticia.manchete}>
        {noticia.manchete}
    </button>)

export default () =>
    <div className="Cards">
        <Card titulo="Notícias" color="#3A9AD9">
            <div>{noticiasLI}</div>
        </Card>
    </div>