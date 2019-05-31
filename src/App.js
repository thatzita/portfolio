import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Content from "./components/Content";
import Admin from "./components/Admin";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/" component={Content} />
          <Route exact path="/admin" component={Admin} />
        </React.Fragment>
      </Router>
    );
  }
}
export default App;
