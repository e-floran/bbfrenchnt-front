// import { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from './use/useSecureRoute'

import "./App.css";
import Header from "./components/Header";

import Home from "./pages/Home";
import Database from "./pages/Database";
import ScoutPlayers from "./pages/ScoutPlayers";
import ScoutForm from "./components/scoutPlayers/ScoutForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute exact path="/database">
            <Database />
          </PrivateRoute>
          <PrivateRoute exact path="/scoutplayers">
            <ScoutForm />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
