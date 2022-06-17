import { Link } from "react-router-dom";

import noticias from "../../data/noticias.json";
import Card from "../../layout/Card";

export default () => {

  const noticiasLI = noticias.slice(0).reverse().map((noticia) => (
    <div className="border border-dark rounded w-100 p-1 m-1">
      <Link to="/mat" state={noticia} key={Math.random()}>
        {noticia.data} --- {noticia.manchete}
      </Link>
    </div>
  ));

  return (
    <div className="Cards">
      <Card titulo="Notícias" color="#3A9AD9" key={Math.random()}>
        <div>{noticiasLI}</div>
        <Link
          key={Math.random()}
          to="/noticias"
          className="border border-dark rounded w-100 p-1 m-1"
        >
          Mais noticias
        </Link>
      </Card>
    </div>
  );
};