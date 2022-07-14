import { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../../../layout/Card";
import { connect } from "react-redux";

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

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
    localStorage.removeItem("login");
    localStorage.removeItem("user");
  }

  render() {
    let button;
    if (localStorage.user) {
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
  return { state };
}

export default connect(mapStateToProps)(LoginControl);
