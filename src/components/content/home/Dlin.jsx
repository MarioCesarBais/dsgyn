import { Link } from "react-router-dom";

import Card from "../../../layout/Card";
import eventos from '../../../data/eventos.json'


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
                        <Link to="/mat" state={evento}>ler mais ...</Link>
                    </p>
                </div>
            </Card>
        </div>
    )
}