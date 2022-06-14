import { useLocation } from "react-router-dom";

import './mat.css'
import Card from "../../layout/Card";

// import artigos from "../../data/artigos.json";
// import eventos from "../../data/eventos.json";
// import noticias from "../../data/noticias.json";

export default () => {
  /* //     <h1>{manchete}</h1>
//     <h6>{data}</h6>
//     <p>{materia}</p>
//   </>; */
  const location = useLocation().state;
  const manchete = location.manchete;
  const data = location.data;
  const materia = location.materia;
  console.log(manchete, data, materia);
  return (
    <div className="Cards">
      <Card titulo={manchete} color="#3A9AD9">
        <p id='mat' className="border border-dark rounded w-100 py-3 px-4">{data} --- {materia}</p>
      </Card>
    </div>
  );
};
