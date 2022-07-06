import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "../../layout/Card";
import { baseUrl, initialState, formattedDate } from "../../utils/utils";

export default () => {

  const [noticias, setNoticias] = useState([initialState]);

  const getData = async () => { await axios(`${baseUrl}/noticias`).then((resp) => { setNoticias(resp.data); });};

  useEffect(() => { getData(); }, []);
  useEffect(() => {if (noticias.length > 1) {}}, [noticias]);

  const noticiasLI = noticias.slice(0).reverse().map((evento) => (
    <div className="border border-dark rounded w-100 p-1 m-1" key={Math.random()}>
      <Link to="/mat" state={evento}>
        {formattedDate(evento.data)} -- {evento.manchete}
      </Link>
    </div>
  ));

  return (
    <div className="Cards">
      <Card titulo="Notícias" color="#3A9AD9">
        <div>{noticiasLI}</div>
      </Card>
    </div>
  );
};
