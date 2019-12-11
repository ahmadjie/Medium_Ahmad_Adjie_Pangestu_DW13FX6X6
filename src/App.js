import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CategoryPages from './pages/CategoryPages';
import Home from "./pages/Home";



export default class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/categorypages">
            <CategoryPages />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}
