import { Link } from "react-router-dom";

import Card from "../../../layout/Card";
import noticias from '../../../data/noticias.json'


export default () => {
    const maximo = 120
    const noticia = noticias[noticias.length - 1] // último noticia registrado
    const m = noticia.materia.length <= maximo ? noticia.materia : `${noticia.materia.slice(0, maximo)} ...`

    return (
        <div className='Cards'>
            <Card id="dcol" titulo={noticia.manchete} color="#3A9AD9">
                <div>
                    <p className='texto'>
                        {noticia.data} - {m}
                        <Link to="/mat" state={noticia}>ler mais ...</Link>
                    </p>
                </div>
            </Card>
        </div>
    )
}