import React, { Component } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import ListMenu from "./Components/ListMenu/ListMenu";
import Question from "./Components/Question/Question";


import birdsData from "./controller/birdsData"
import Random from "./controller/random"
import AnswersBlock from "./Components/AnswersBlock/AnswersBlock";
import Description from "./Components/Description/Description";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      stage: 0,
      secretBird: 0,
      correctAnswer: null,
      questionData: {
        name: "",
        img: "",
        sound: "",
      },
      answerOptions: [],
      nextQuestion: false
    };


  }

  componentDidMount() {
    this.startLvl(0)
  }

  startLvl = lvl => {

    const random =  Random(0,5)
    
    let ans = birdsData[lvl];
    console.log("ans", ans)
    this.setState()

    this.setState({
      secretBird: random,
      questionData: {
        name: "000000",
        img: "",
        sound: birdsData[lvl][random].audio
      },
      answerOptions: birdsData[lvl],
    });

    



    // console.log("bird: ", this.state.secretBird, " ", birdsData[lvl][this.state.secretBird].name)

  }


  render() {
    return (
      <div className="App">
        <Header score={this.state.score}/>
        <ListMenu stage={this.state.stage}/>
        <Question name={this.state.questionData.name} sound={this.state.questionData.sound}/>
        <div className="row">
          <AnswersBlock answerOptions={this.state.answerOptions}/>
          <Description nextQuestion={this.state.nextQuestion}/>
        </div>
      </div>
    );
  }
}

export default App;
