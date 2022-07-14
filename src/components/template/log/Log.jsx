import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import Card from "../../../layout/Card";

function logout() {
  localStorage.removeItem("login");
  localStorage.removeItem("user");
  console.log(localStorage);
};

const Home = (props) => {

  console.log(props)
  const user = props.user

  console.log(user)

  useEffect(() => {if(user) {}}, [user])
  useEffect(() => {if(!user) {}}, [])

  console.log(user)

  const userNotLogin = (
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
      <Link to="/login">
        <button
          style={{ width: "100px" }}
          variant="contained"
          color="secondary"
        >
          Login
        </button>
      </Link>
    </div>
  );

  const userLogged = props => {
    console.log(props)
    return (
    <div
      className="d-flex flex-column text-center"
      style={{ marginTop: "10px" }}
    >
      <div>
        <h2>Bem vindo,</h2> {localStorage.user}!
      </div>
      <Link to='/'>
      <button
        style={{ width: "100px" }}
        variant="contained"
        color="secondary"
        onClick={logout}
      >
        Logout
      </button>
      </Link>
    </div>
  )}

  console.log(props, localStorage, user)
  return localStorage.user ? userLogged(props) : userNotLogin;
};

function Log(props) {
  console.log(props)
  const user = props.user
  return (
    <Card titulo="Login" id="log" color="lightgreen">
      <Home user={user} />
    </Card>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return { state };
}

export default connect(mapStateToProps)(Log);
