// import { Link } from "react-router-dom";

// import noticias from "../../data/noticias.json";
// import Card from "../../layout/Card";

// export default () => {

//   const noticiasLI = noticias.slice(0).reverse().map((noticia) => (
//     <div className="border border-dark rounded w-100 p-1 m-1" key={Math.random()}>
//       <Link to="/mat" state={noticia}>
//         {noticia.data} --- {noticia.manchete}
//       </Link>
//     </div>
//   ));

//   return (
//     <div className="Cards">
//       <Card titulo="Notícias" color="#3A9AD9" key={Math.random()}>
//         <div>{noticiasLI}</div>
//       </Card>
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "../../layout/Card";
import { baseUrl, initialState } from "../../utils/utils";

export default () => {

  const [noticias, setNoticias] = useState([initialState]);

  const getData = async () => { await axios(`${baseUrl}/noticias`).then((resp) => { setNoticias(resp.data); });};

  useEffect(() => { getData(); }, []);
  useEffect(() => {if (noticias.length > 1) {}}, [noticias]);

  const noticiasLI = noticias.slice(0).reverse().map((evento) => (
    <div className="border border-dark rounded w-100 p-1 m-1" key={Math.random()}>
      <Link to="/mat" state={evento}>
        {evento.data} --- {evento.manchete}
      </Link>
    </div>
  ));

  return (
    <div className="Cards">
      <Card titulo="noticias" color="#3A9AD9">
        <div>{noticiasLI}</div>
      </Card>
    </div>
  );
};
