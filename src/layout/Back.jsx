import { useNavigate} from "react-router-dom";

export default () => {
    let navigate = useNavigate();
    return (
        <>
          <button className='btn btn-primary btn-sm' onClick={() => navigate(-1)}>Voltar</button> 
        </>
    );
};