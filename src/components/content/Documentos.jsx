import ata from '../../data/documents/ataEleicao.pdf'   //'./ataEleicao.pdf'
import Card from '../../layout/Card'

export default () =>
    <div className='Cards'>
        <Card titulo="Documentos" color="#3A9AD9" key={Math.random()}>
        {/* <h1 className="text-center p-3 my-2 bg-primary text-white rounded">Documentos</h1> */}
        <button className="btn btn-warning btn-sm border border-dark rounded w-100 my-1 mx-auto">
            <a href="https://www.sindifisconacional.org.br/estatuto-do-sindifisco-nacional/"
                target="_blank"><strong>Estatuto Social</strong></a>
        </button>
        <button className="btn btn-warning btn-sm border border-dark rounded w-100 my-1 mx-auto">
            <a href={ata} target="_blank"><strong>Ata de Eleição da Diretoria da Delegacia Sindical</strong></a>
        </button>
        </Card>
    </div>