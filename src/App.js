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
    console.log(process.env.PUBLIC_URL);
    return (
      <Router>
        <React.Fragment>
          <Route path="/portfolio/" component={Content} />
          <Route path="/portfolio/admin/" component={Admin} />
        </React.Fragment>
      </Router>
    );
  }
}
export default App;
