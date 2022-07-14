import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Home = props => {
  console.log(props)
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
        <div>
        <h2>Bem vindo</h2>{props.user.userLogged}!
        </div>
      ) : (
        <>{userNotLogin()}</>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Home);
