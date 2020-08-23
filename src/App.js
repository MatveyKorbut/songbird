import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./Components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <Header score={this.state.score}/>
      </div>
    );
  }
}

export default App;
