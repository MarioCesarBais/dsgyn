import Crud from './Crud'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const headerProps = {
  icon: <FontAwesomeIcon icon={faCalendarDays} />,
  title: "Eventos",
  subtitle:
    "Cadastro de eventos: Incluir, Listar, Alterar e Excluir!",
};

export default () => <Crud header={headerProps} subject='eventos' />