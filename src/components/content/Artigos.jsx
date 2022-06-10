import artigos from '../../data/artigos.json'
import Card from '../../layout/Card'

const artigosLI = artigos.map(artigo =>
    <button className="btn btn-primary btn-sm border border-dark rounded w-100 my-1" key={artigo.manchete}>
        {artigo.manchete}
    </button>
)

export default () =>
    <div className="Cards">
        <Card titulo="Artigos" color="#3A9AD9">
            <div>{artigosLI}</div>
        </Card>
    </div>