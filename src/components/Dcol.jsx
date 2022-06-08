import Card from "../layout/Card";
import noticias from '../data/noticias.json'


export default () => {
    const maximo = 120
    const noticia = noticias[0] // último noticia registrado
    let m = noticia.materia.length <= maximo ? noticia.materia : `${noticia.materia.slice(0, maximo)} ...`

    return (
        <div className='Cards'>
            <Card id="dcol" titulo={noticia.manchete} color="#3A9AD9">
                <div>
                    <p className='texto'>
                        {noticia.data} - {m}
                        <button className='btn btn-primary btn-sm'>ler mais</button>
                    </p>
                </div>
            </Card>
        </div>
    )
}