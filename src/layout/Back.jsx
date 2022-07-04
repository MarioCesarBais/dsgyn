import { useNavigate} from "react-router-dom";

export default () => {
    let navigate = useNavigate();
    return (
        <div className='text-center'>
          <button className='btn btn-primary btn-sm btn-block w-75' onClick={() => navigate(-1)}>Voltar</button> 
        </div>
    );
};