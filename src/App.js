// import { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";

import Home from "./pages/Home";
import Database from "./pages/Database";
import ScoutPlayers from "./pages/ScoutPlayers";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/database">
            <Database />
          </Route>
          <Route exact path="/scoutplayers">
            <ScoutPlayers />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
