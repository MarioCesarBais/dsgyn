import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";

export default () => {
    let navigate = useNavigate();
    return (
        <div className='text-center'>
          <button className='btn btn-primary btn-sm btn-block w-50 mt-3'
          onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faRotateLeft} /> Voltar</button> 
        </div>
    );
};