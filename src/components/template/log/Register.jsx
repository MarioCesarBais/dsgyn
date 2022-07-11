import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axiox from "axios";

import { baseUrlUser } from "../../../utils/utils";
import Card from "../../../layout/Card";

const Register = ({ setLogoutUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const register = (e) => {
    e.preventDefault();
    axiox
      .post(`${baseUrlUser}/api/auth/register`, {
        email,
        password,
      })
      .then((response) => {
        console.log("response", response);
        localStorage.setItem(
          "login",
          JSON.stringify({
            userLogin: true,
            token: response.data.access_token,
          })
        );
        setError("");
        setEmail("");
        setPassword("");
        setLogoutUser(false);
      })
      .catch((error) => setError(error.response.data.message));
  };

  if (
    localStorage &&
    localStorage.login &&
    JSON.parse(localStorage.login).userLogin
  )
    return <Navigate replace to="/" />;
  else
    return (
      <Card titulo='Registro de Usuário' color='aqua'>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form
          noValidate
          autoComplete="off"
          onSubmit={register}
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
            style={{ width: "110px" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Registrar-se
          </button>
        </form>
        <p className="mt-3">
          Já possui conta? <Link to="/login">Login!</Link>
        </p>
      </Card>
    );
};

export default Register;
