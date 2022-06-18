import { Link } from "react-router-dom";

import eventos from "../../data/eventos.json";
import Card from "../../layout/Card";

export default () => {
  const eventosLI = eventos.slice(0).reverse().map((evento) => (
    <div className="border border-dark rounded w-100 p-1 m-1">
      <Link to="/mat" state={evento} key={`${evento.manchete}${Math.random()}`}>
        {evento.data} --- {evento.manchete}
      </Link>
    </div>
  ));

  return (
    <div className="Cards">
      <Card titulo="Eventos" color="#3A9AD9" key={Math.random()}>
        <div>{eventosLI}</div>
      </Card>
    </div>
  );
};
