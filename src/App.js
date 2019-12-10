import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login"
import Home from "./pages/Home";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
