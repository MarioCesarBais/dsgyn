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
                        <button className='btn btn-primary btn-sm'>ler mais</button>
                    </p>
                </div>
            </Card>
        </div>
    )
}