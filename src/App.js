import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./Components/Header/Header";
import ListMenu from "./Components/ListMenu/ListMenu";
import Question from "./Components/Question/Question";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      stage: 0
    };
  }

  render() {
    return (
      <div className="App">
        <Header score={this.state.score}/>
        <ListMenu stage={this.state.stage}/>
        <Question />
      </div>
    );
  }
}

export default App;
