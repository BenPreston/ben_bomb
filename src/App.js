import React from "react";
import Navigation from "./components/Navigation";
import MatchData from "./components/MatchData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
// Data imported locally - in future dynamic API
import { match_7298 } from "./data/match_7298";
import { match_7430 } from "./data/match_7430";

function App() {
  return (
    <Router>
      <div className="App container">
        <Navigation />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            path="/game/7298"
            render={() => <MatchData data={match_7298} />}
          />
          <Route
            path="/game/7430"
            render={() => <MatchData data={match_7430} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
