import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render((
  <Router history = {browserHistory}>
  <Route path = "/" component = {App}>
     <IndexRoute component = {Home} />
     <Route path = "home" component = {Home} />
     <Route path = "about" component = {About} />
     <Route path = "contact" component = {Contact} />
  </Route>
</Router>),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
