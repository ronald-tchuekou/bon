import React from 'react';
import ReactDOM from 'react-dom';
import "mirajs/dist/style/sass/style.css";
import './utils/styles/style.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './auth/login';
import reportWebVitals from './reportWebVitals';
import Admin from "./admin";
import User from "./user";
import Error from "./errors/404";
import Demo from './demo'
import { TextInputDemo } from './demo/text_input'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/admin">
          <Admin/>
        </Route>
        <Route path="/user">
          <User/>
        </Route>
        <Route exact={true} path={["/", "/login"]}>
          <Login />
        </Route>
        <Route path={"/demo"}>
          <Demo/>
        </Route>
        <Route path={"/text-input"}>
          <TextInputDemo/>
        </Route>
        <Route path="*">
          <Error/>
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
