import { useLocation } from "react-router-dom";

import './mat.css'
import Card from "../../layout/Card";

export default () => {
  const [_, manchete, data, materia] = Object.values(useLocation().state)
  return (
    <div className="Cards">
      <Card titulo={manchete} color="#3A9AD9">
        <p id='mat' className="border border-dark rounded w-100 py-3 px-4">{data} --- {materia}</p>
      </Card>
    </div>
  );
};
