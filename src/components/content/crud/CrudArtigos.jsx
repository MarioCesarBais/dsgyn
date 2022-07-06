import Crud from './Crud'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

const headerProps = {
  icon: <FontAwesomeIcon icon={faNewspaper} />,
  title: "Artigos",
  subtitle:
    "Cadastro de artigos: Incluir, Listar, Alterar e Excluir!",
};

export default () => <Crud header={headerProps} subject='artigos' />