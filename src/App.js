import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import indexwheel from "./indexwheel";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={indexwheel}></Route>
          <Route path="/quiz" component={Quiz}></Route>
          <Route path="/result" component={Result}></Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
