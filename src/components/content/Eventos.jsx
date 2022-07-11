import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "../../layout/Card";
import { baseUrl, initialState, formattedDate } from "../../utils/utils";

export default () => {

  const [eventos, setEventos] = useState([initialState]);

  const getData = async () => { await axios(`${baseUrl}/eventos`).then((resp) => { setEventos(resp.data); });};

  useEffect(() => { getData(); }, []);
  useEffect(() => { if(length.eventos > 1) {} }, [eventos]);

  const eventosLI = eventos.slice(0).reverse().map((evento) => (
    <div className="border border-dark rounded w-100 p-1 m-1" key={Math.random()}>
      <Link to="/mat" state={evento}>
        {formattedDate(evento.data)} -- {evento.manchete}
      </Link>
    </div>
  ));

  return (
    <div className="Cards">
      <Card titulo="Eventos" color="#3A9AD9">
        <div>{eventosLI}</div>
      </Card>
    </div>
  );
};
