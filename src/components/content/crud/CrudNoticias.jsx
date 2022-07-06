import Crud from './Crud'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const headerProps = {
  icon: <FontAwesomeIcon icon={faPaperPlane} />,
  title: "Notícias",
  subtitle:
    "Cadastro de notícias: Incluir, Listar, Alterar e Excluir!",
};

export default () => <Crud header={headerProps} subject='noticias' />