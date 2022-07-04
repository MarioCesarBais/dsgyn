import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "../../../layout/Card";
import { baseUrl, initialState, formattedDate } from "../../../utils/utils";

export default () => {
    const maximo = 120
    const [noticia, setNoticia] = useState(initialState);
    const [m, setM] = useState('')

    const getData = async () => {
        await axios(`${baseUrl}/noticias`).then((resp) => {
          setNoticia(resp.data[resp.data.length - 2]);
          setM(`${resp.data[resp.data.length - 2].materia.slice(0, maximo)} ...`)
        });
      };
    
    useEffect(() => { getData(); }, []);
    useEffect(() => {if (!noticia.manchete === '') {}}, [noticia, m]);

    return (
        <div className='Cards'>
            <Card id="menor" titulo={noticia.manchete} color="#3A9AD9">
                <div>
                    <p className='texto'>
                        {formattedDate(noticia.data)} -- {m}
                        <Link to="/mat" state={noticia}>ler mais ...</Link>
                    </p>
                </div>
            </Card>
        </div>
    )
}