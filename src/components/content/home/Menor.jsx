import { Link } from "react-router-dom";

import Card from "../../../layout/Card";
import noticias from '../../../data/noticias.json'

export default () => {
    // const maximo = 50
    const noticia = noticias[1] // último noticia registrado

    return (
        <div className='Cards'>
            <Card id="menor" titulo={noticia.manchete} color="#3A9AD9">
                <div>
                    <p className='texto'>
                        {noticia.data} ...
                        <Link to="/mat" state={noticia}>ler mais ...</Link>
                    </p>
                </div>
            </Card>
        </div>
    )
}