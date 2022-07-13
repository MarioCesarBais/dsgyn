import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/font-awesome/css/font-awesome.min.css"; // or the following
// import 'font-awesome/css/font-awesome.min.css';
// import { applyMiddleware, createStore } from 'redux'
// import { Provider } from 'react-redux'
// import promise from 'redux-promise'
// import multi from 'redux-multi'
// import thunk from 'redux-thunk'

import { Provider } from "react-redux";

import storeConfig from "./store/storeConfig";

import "./index.css";
import App from "./main/App";
// import { combineReducers } from 'redux';

const store = storeConfig();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
