import eventos from '../../data/eventos.json'
import Card from '../../layout/Card'

const eventosLI = eventos.map((evento) =>
    <button className="btn btn-primary btn-sm border border-dark rounded w-100 my-1" key={evento.manchete}>
        {evento.manchete}
    </button>)

export default () =>
    <div className="Cards">
        <Card titulo="Eventos" color="#3A9AD9">
            <div>{eventosLI}</div>
            <button className="btn btn-primary btn-sm border border-dark rounded w-100 my-1">
                        Mais Eventos</button>
        </Card>
    </div>