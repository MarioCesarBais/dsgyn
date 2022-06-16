import { Link } from "react-router-dom";

import eventos from "../../data/eventos.json";
import Card from "../../layout/Card";

const eventosLI = eventos.map((evento) => (
    <div className="border border-dark rounded w-100 p-1 m-1">
      <Link to="/mat" state={evento} key={Math.random()}>
        {evento.data} --- {evento.manchete}
      </Link>
    </div>
  ));

export default (props) =>
    <div className="Cards">
      <Card titulo="Eventos" color="#3A9AD9" key={Math.random()}>
        <div>{eventosLI}</div>
        <Link key={Math.random()}
          to="/eventos"
          className="border border-dark rounded w-100 p-1 m-1"
        >
          Mais eventos
        </Link>
      </Card>
    </div>