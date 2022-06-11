import ata from '../../data/documents/ataEleicao.pdf'   //'./ataEleicao.pdf'

export default () =>
    <div>
        <h1 className="text-center p-3 mb-2 bg-primary text-white">Documentos</h1>
        <button className="btn btn-warning btn-sm border border-dark rounded w-100 my-1">
            <a href="https://www.sindifisconacional.org.br/estatuto-do-sindifisco-nacional/"
                target="_blank"><strong>Estatuto Social</strong></a>
        </button>
        <button className="btn btn-warning btn-sm border border-dark rounded w-100 my-1">
            <a href={ata} target="_blank"><strong>Ata de Eleição da Diretoria da Delegacia Sindical</strong></a>
        </button>
    </div>