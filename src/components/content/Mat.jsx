import { useLocation } from "react-router-dom";

import './mat.css'
import Card from "../../layout/Card";
import { formattedDate } from "../../utils/utils";

export default () => {
  const location = useLocation().state
  const [manchete, data, materia] = [location.manchete, location.data, location.materia]
  return (
    <div className="Cards">
      <Card titulo={manchete} color="#3A9AD9">
        <p id='mat' className="border border-dark rounded w-100 py-3 px-4">{formattedDate(data)} --- {materia}</p>
      </Card>
    </div>
  );
};
