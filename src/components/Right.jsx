import Artigos from "./content/Artigos";
import Eventos from "./content/Eventos";
import Noticias from "./content/Noticias";

export default () =>
    <div id='right'>
        <Eventos n={3} />
        <Noticias n={3} />
        <Artigos n={3} />
    </div>