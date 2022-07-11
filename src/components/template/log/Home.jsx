import { Link } from "react-router-dom";

const Home = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  const userNotLogin = () => (
    <div>
      <p className="mb-1"><strong>Usuário Não Logado</strong></p>
      <p className="m-0">
        Tem conta? Favor <Link to="/login">Login</Link>
      </p>
      <p className="m-0">
        Não tem conta ainda? {" "}
        <Link to="/register">Registrar-se</Link>
      </p>
    </div>
  );
  return (
    <div className='d-flex flex-column text-center' style={{ marginTop: "10px" }}>
      {isLoginTrue && isLoginTrue.userLogin ? (
        <h2>Bem vindo!</h2>
      ) : (
        <>{userNotLogin()}</>
      )}
    </div>
  );
};

export default Home;
