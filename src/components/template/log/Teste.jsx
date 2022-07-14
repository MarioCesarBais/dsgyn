import React, {useEffect} from "react";
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
      <Link to='/' />
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
        <Link to='/login'>
      <button onClick={props.onClick}>
        Login
      </button>
      </Link>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

  class LoginControl extends React.Component {
    constructor(props) {
      super(props);
    //   this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: localStorage.user ? true : false};
      console.log(props)
    }
  
    // handleLoginClick() {
    //     console.log('handleclicklogin')
    //     // const user = localStorage.user
    //     // // useEffect(() => {if(localStorage.user) {}}, [user])
    //     // // useEffect(() => {if(!user) {}}, [])
    //     // this.setState({isLoggedIn: localStorage.user ? true : false});
    //     // console.log(this.state)
    // }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
      localStorage.removeItem("login");
      localStorage.removeItem("user");
      console.log(localStorage, this.props);
    }
  
    render() {
        // this.setState({isLoggedIn: localStorage.user ? true : false})
        console.log('state: ', this.state)
        console.log('props :', this.props)
        // if(this.props.state && this.props.state.user && this.props.state.user.userLogged)
        // {this.setState({isLoggedIn: true})}
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (localStorage.user) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton />;
      }
  
      return (
        <div id='teste'>
            <Card titulo='Login' color='lightgreen'>
          <Greeting isLoggedIn={localStorage.user ? true : false} />
          {button}
          </Card>
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    console.log(state)
    return { state }
  }

  export default connect(mapStateToProps)(LoginControl);