import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './auth/login';
import reportWebVitals from './reportWebVitals';
import Admin from "./admin";
import User from "./user";
import Styled from "styled-components";

const Error = Styled.div`
    height: 100vh;
    width: 100vw;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
  `

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact={true} path="/admin">
          <Admin/>
        </Route>
        <Route exact={true} path="/user">
          <User/>
        </Route>
        <Route exact={true} path={["/", "/login"]}>
          <Login />
        </Route>
        <Route path="*">
          <Error>Not Found</Error>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
