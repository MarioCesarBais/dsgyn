import Card from "../layout/Card";
import eventos from '../data/eventos.json'


export default () => {
    const maximo = 200
    const evento = eventos[1] // último evento registrado
    let m = evento.materia.length <= maximo ? evento.materia : `${evento.materia.slice(0, maximo)} ...`

    return (
        <div className='Cards'>
            <Card id="dlin" titulo={evento.manchete} color="#3A9AD9">
                <div>
                    <p className='texto'>
                        {evento.data} - {m}
                        <button className='btn btn-primary btn-sm'>ler mais</button>
                    </p>
                </div>
            </Card>
        </div>
    )
}