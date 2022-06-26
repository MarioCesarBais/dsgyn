import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "../../layout/Card";
import { baseUrl, initialState } from "../../utils/utils";

export default () => {

  const [artigos, setArtigos] = useState([initialState]);

  const getData = async () => { await axios(`${baseUrl}/artigos`).then((resp) => { setArtigos(resp.data); });};

  useEffect(() => { getData(); }, []);
  useEffect(() => {if (artigos.length > 1) {}}, [artigos]);

  const artigosLI = artigos.slice(0).reverse().map((evento) => (
    <div className="border border-dark rounded w-100 p-1 m-1" key={Math.random()}>
      <Link to="/mat" state={evento}>
        {evento.data} --- {evento.manchete}
      </Link>
    </div>
  ));

  return (
    <div className="Cards">
      <Card titulo="artigos" color="#3A9AD9">
        <div>{artigosLI}</div>
      </Card>
    </div>
  );
};
