import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);
const About = () => (
  <div>
    <h1>About</h1>
  </div>
);
const Topic = ({ match }) =>
  console.log("match", match) || (
    <div>
      <h2>{match.params.topicId}</h2>
    </div>
  );
const Topics = ({ match }) => (
  <div>
    <h1>Topics</h1>
    <ul>
      <li>
        <Link to={`${match.url}/renderind`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>
    <Route path="/topics/:topicId" component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Pleasae select a topic</h3>}
    />
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="topics">Topics</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

export default App;
