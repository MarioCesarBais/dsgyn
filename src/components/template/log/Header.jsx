import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ logoutUser, setLogoutUser }) => {
  console.log('header')
  const [login, setLogin] = useState("");

  const hydrateStateWithLocalStorage = () => {
    if (localStorage.hasOwnProperty("login")) {
      let value = localStorage.getItem("login");
      try {
        value = JSON.parse(value);
        setLogin(value);
      } catch (e) {
        setLogin("");
      }
    }
  };

  useEffect(() => {
    hydrateStateWithLocalStorage();
  }, [logoutUser]);

  const logout = () => {
    localStorage.removeItem("login");
    setLogoutUser(true);
    // return <Navigate to='/' replace />
  };

  console.log(!logoutUser && login && login.userLogin)

  return (
    <div className="d-flex justify-content-center">
      <header style={{ marginTop: "20px" }}>
        {!logoutUser && login && login.userLogin ? (
          <button
            style={{ width: "100px" }}
            variant="contained"
            color="secondary"
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button
              style={{ width: "100px" }}
              variant="contained"
              color="secondary"
            >
              Login
            </button>
          </Link>
        )}
      </header>
    </div>
  );
};

export default Header;
