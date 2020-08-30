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
      clicked: 0,
      questionData: {
        name: "",
        img: "",
        sound: "",
        showName: "",
        showImg: "",
      },
      answerOptions: [],
      nextQuestion: false,
      // showBirdDescription: null,
      // birdData: [],
    };
  }

  componentDidMount() {
    this.startLvl(0)
  }

  startLvl = lvl => {

    const random =  Random(0,5)
    

    this.setState({
      secretBird: random,
      questionData: {
        name: "*****",
        img: "",
        showName: birdsData[lvl][random].name,
        showImg: birdsData[lvl][random].image,
        sound: birdsData[lvl][random].audio,
        species: birdsData[lvl][random].species,
        description: birdsData[lvl][random].species,
      },
      answerOptions: birdsData[lvl],
    });
  }

  checkAnswer = (idx) => {
    const {
      nextQuestion, secretBird, stage
    } = this.state;
    if (!nextQuestion) {
      console.log("check")

  
      const data = birdsData[stage][idx];
  
      console.log("App -> checkAnswer -> data", data)
      
      this.setState( {...this.state, birdData: data}, () => {
          console.log("birdData ", this.state.birdData)
  
      } )
      
      this.setState( {clicked: this.state.clicked + 1})
  
      const clicked = this.state.clicked;
      // console.log("App -> checkAnswer -> clicked", clicked)
  
      if (nextQuestion) {
        return;
      }
      if (idx === secretBird) {
        this.setState({...this.state, nextQuestion: true, score: this.state.score + 5 - clicked, clicked: 0});
        const questionPlayer = document.querySelector(".info audio");
        questionPlayer.pause();
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }

  }


  render() {
    return (
      <div className="App">
        <Header score={this.state.score}/>
        <ListMenu stage={this.state.stage}/>
        <Question 
          nextQuestion={this.state.nextQuestion} 
          questionData={this.state.questionData}
        />
        <div className="row">
          <AnswersBlock answerOptions={this.state.answerOptions} checkAnswer={this.checkAnswer}/>
          <Description 
            birdData = {this.state.birdData ? this.state.birdData : {}}
          />
        </div>
      </div>
    );
  }
}

export default App;
