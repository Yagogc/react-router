import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Players from "./Players";
import Teams from "./Teams";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/Players" component={Players} />
          <Route path="/teams" component={Teams} />
        </div>
      </Router>
    );
  }
}

export default App;
