import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import Card from "../../../layout/Card";
import './log.css'
import { alterarLogin } from "../../../store/actions/login";

function UserGreeting() {
  return (
    <div
      className="d-flex flex-column text-center"
      style={{ marginTop: "10px" }}
    >
      <div>
        <h2>Bem vindo,</h2> {localStorage.user}!
      </div>
      <Link to="/" />
    </div>
  );
}

function GuestGreeting() {
  return (
    <div>
      <p className="mb-1">
        <strong>Usuário Não Logado</strong>
      </p>
      <p className="m-0">
        Tem conta? Favor <Link to="/login">Login</Link>
      </p>
      <p className="m-0">
        Não tem conta ainda? <Link to="/register">Registrar-se</Link>
      </p>
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <Link to="/login">
      <button onClick={props.onClick}>Login</button>
    </Link>
  );
}

function LogoutButton(props) {
  return (
    <Link to="/">
      <button onClick={props.onClick}>Logout</button>
    </Link>
  );
}

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: localStorage.user ? true : false };
  }

  isLoggedInF() {
    const login = localStorage.getItem('login')
    if(!login) {
      this.setState( {isLoggedIn: false} )
      localStorage.clear()
      return false
    }
    const token = JSON.parse(login).token
    if(!token) {
      this.setState( {isLoggedIn: false} )
      localStorage.clear()
      return false
    }
    let decoded
    try {
      decoded = jwt_decode(token);
    }
    catch(e) {
      localStorage.clear()
      decoded = false
      this.setState( {isLoggedIn: false} )
      alert('Token Inválido')
      return false
    }
    if(decoded) return true
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
    localStorage.clear();
    this.props.logged(null)
    alert('Logout realizado com sucesso!')
  }

  render() {
    let button;
    if (localStorage.user && this.isLoggedInF()) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton />;
    }

    return (
      <div id="log">
        <Card titulo="Login" color="lightgreen">
          <Greeting isLoggedIn={localStorage.user ? true : false} />
          {button}
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    logged() {
      // action creator -> action
      const action = alterarLogin(null)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginControl);

// export default LoginControl