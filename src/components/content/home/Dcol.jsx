import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "../../../layout/Card";
import { baseUrl, initialState } from "../../../utils/utils";

const maximo = 120;

export default () => {
  const [noticia, setNoticia] = useState(initialState);
  const [m, setM] = useState('')

  const getData = async () => {
    await axios(`${baseUrl}/noticias`).then((resp) => {
      setNoticia(resp.data[resp.data.length - 1]);
      setM(`${resp.data[resp.data.length - 1].materia.slice(0, maximo)} ...`)
    });
  };

  useEffect(() => { getData(); }, []);
  useEffect(() => {if (!noticia.manchete === '') {}}, [noticia, m]);

  return (
    <div className="Cards">
      <Card id="dcol" titulo={noticia.manchete} color="#3A9AD9">
        <div>
          <p className="texto">
            {noticia.data} - {m}
            <Link to="/mat" state={noticia}>
              ler mais ...
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};
