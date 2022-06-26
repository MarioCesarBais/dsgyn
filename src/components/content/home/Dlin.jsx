import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "../../../layout/Card";
// import eventos from '../../../data/eventos.json'
import { baseUrl, initialState } from "../../../utils/utils";


export default () => {
    const [evento, setEvento] = useState(initialState);
    const [m, setM] = useState('')
    const maximo = 300
    // const evento = eventos[eventos.length - 2] // penúltimo evento registrado
    // let m = evento.materia.length <= maximo ? evento.materia : `${evento.materia.slice(0, maximo)} ...`

    const getData = async () => {
        await axios(`${baseUrl}/eventos`).then((resp) => {
          setEvento(resp.data[resp.data.length - 1]);
          setM(`${resp.data[resp.data.length - 1].materia.slice(0, maximo)} ...`)
        });
      };
    
    useEffect(() => { getData(); }, []);
    useEffect(() => {if (!evento.manchete === '') {}}, [evento, m]);


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