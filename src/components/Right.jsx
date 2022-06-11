import Card from "../layout/Card";
import eventos from '../data/eventos.json';
import noticias from '../data/noticias.json';
import artigos from '../data/artigos.json';

export default () => {
    const eventosLI = eventos.map((evento) =>
        <button className="btn btn-primary btn-sm border border-dark rounded w-100 my-1" key={evento.manchete}>
            {evento.manchete}
        </button>)

    const noticiasLI = noticias.map((noticia =>
        <button className="btn btn-primary btn-sm border border-dark rounded w-100 my-1" key={noticia.manchete}>
            {noticia.manchete}
        </button>)
    )

    const artigosLI = artigos.map(artigo =>
        <button className="btn btn-primary btn-sm border border-dark rounded w-100 my-1" key={artigo.manchete}>
            {artigo.manchete}
        </button>
    )

    return (
        <div id='right'>
            <div className="Cards">
                <Card titulo="Eventos" color="#3A9AD9">
                    <div>{eventosLI}</div>
                </Card>
            </div>
            <div className="Cards">
                <Card titulo="Notícias" color="#3A9AD9">
                    <div>{noticiasLI}</div>
                </Card>
            </div>
            <div className="Cards">
                <Card titulo="Artigos" color="#3A9AD9">
                    <div>{artigosLI}</div>
                </Card>
            </div>
        </div>
    )
};
