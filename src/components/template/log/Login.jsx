import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axiox from "axios";
import { connect } from "react-redux";

import { alterarLogin } from "../../../store/actions/login";
import { baseUrlUser } from "../../../utils/utils";
import Card from '../../../layout/Card'

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();
    axiox
      .post(`${baseUrlUser}/api/auth/login`, {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem(
          "login",
          JSON.stringify({
            userLogin: true,
            token: response.data.access_token
          }),
        );
        localStorage.setItem("user", email)
        props.logged(email)
        setError("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        if(error.response && error.response.data && error.response.data.message) setError(error.response.data.message);
      });
  };

  if ((
    localStorage &&
    localStorage.login &&
    JSON.parse(localStorage.login).userLogin
  ))
    return <Navigate replace to="/"/>;
  else
    return (
      <Card titulo='Login' color='aqua'>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form
          noValidate
          autoComplete="off"
          onSubmit={login}
        >

          <input
            id="username"
            label="Username"
            type="text"
            className="form-control"
            name="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o e-mail..."
            required={true}
          />

          <br />

          <input
            id="password"
            label="Password"
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite a senha..."
            required={true}
          />

          <br />
          <button
            style={{ width: "100px" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="mt-3">
          Não possui conta? <Link to="/register">Registre-se!</Link>
        </p>
      </Card>
    );
};

function mapStateToProps(state) {
  return { state }
}

function mapDispatchToProps(dispatch) {
  return {
    logged(email) {
      // action creator -> action
      const action = alterarLogin(email)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);