import documentos from '../../data/documentos.json'
import Card from '../../layout/Card'

const documentosLI = documentos.map((documento) =>
    <button className="btn btn-primary btn-sm border border-dark rounded w-100 my-1" key={documento.manchete}>
        {documento.manchete}
    </button>)

export default () =>
    <div className="Cards">
        <Card titulo="Documentos" color="#3A9AD9">
            <div>{documentosLI}</div>
        </Card>
    </div>