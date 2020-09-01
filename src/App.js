import React, { Component } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import ListMenu from "./Components/ListMenu/ListMenu";
import Question from "./Components/Question/Question";


import birdsData from "./controller/birdsData"
import Random from "./controller/random"
import AnswersBlock from "./Components/AnswersBlock/AnswersBlock";
import Description from "./Components/Description/Description";
import NextQuestion from "./Components/NextQuestion/NextQuestion";
import GameOver from "./Components/GameOver/GameOver";

import winSound from "./assets/audio/win.mp3";
import errSound from "./assets/audio/error.mp3";
import gameOverSound from "./assets/audio/gameOver.mp3";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      stage: 0,
      secretBird: 0,
      correctAnswer: null,
      clicked: 0,
      checkedAnswers: [],
      questionData: {
        name: "",
        img: "",
        sound: "",
        showName: "",
        showImg: "",
      },
      answerOptions: [],
      nextQuestion: false,
      gameOver: false
      // showBirdDescription: null,
      // birdData: [],
    };
  }

  componentDidMount() {
    this.startLvl(0);
  }

  startLvl = (lvl) => {
    console.log("App -> lvl", lvl);
    this.clear();

    const random = Random(0, 5);

    this.setState({
      secretBird: random,
      nextQuestion: false,
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
  };

  checkAnswer = (idx) => {
    const { nextQuestion, secretBird, stage, checkedAnswers } = this.state;

    let checked = checkedAnswers;
    checked.push(idx);

    checked = checked.filter((v, i, a) => a.indexOf(v) === i);

    this.setState({ ...this.state, birdData: birdsData[stage][idx] });
    this.setState({ clicked: this.state.clicked + 1, checkedAnswers: checked });

    if (nextQuestion) {
      return;
    }

    if (idx === secretBird) {
      this.playSound(true);
      this.setState({
        ...this.state,
        nextQuestion: true,
        score: this.state.score + 6 - this.state.checkedAnswers.length,
        clicked: 0,
        birdData: birdsData[stage][idx],
      });
      const questionPlayer = document.querySelector(".info audio");
      questionPlayer.pause();
      return true;
    } else {
      this.playSound(false);

      return false;
    }
  };

  clear = () => {
    this.setState({
      checkedAnswers: [],
      questionData: {
        name: "",
        img: "",
        sound: "",
        showName: "",
        showImg: "",
      },
      answerOptions: [],
      nextQuestion: false,
    });
    // document.querySelectorAll("span.answer-indicator").forEach((item) => {item.classList.remove("answer-indicator-true");item.classList.remove("answer-indicator-false");});
  };

  nextLvl = () => {
    if (this.state.nextQuestion) {
      if (this.state.stage !== 5) {
        console.log("nextLvl");
        let lvl = this.state.stage + 1;
        this.setState({ stage: lvl });
        console.log("App -> nextLvl -> this.state.stage", this.state.stage);
        this.startLvl(lvl);
      } else {
        this.setState({ gameOver: true });
        const audio = new Audio(gameOverSound);
        audio.play(); 
      }
    } else {
      return
    }
  };

  playSound = (bool) => {
    const audio = new Audio(bool ? winSound : errSound);
    audio.play(); 
  }

  createNewGame = () => {
    this.setState({
      score: 0,
      stage: 0,
      secretBird: 0,
      correctAnswer: null,
      clicked: 0,
      checkedAnswers: [],
      questionData: {
        name: "",
        img: "",
        sound: "",
        showName: "",
        showImg: "",
      },
      answerOptions: [],
      nextQuestion: false,
      gameOver: false
      // showBirdDescription: null,
      // birdData: [],
    });
    this.startLvl(0)
  }

  render() {
    return (
      <div className="App">
        <Header score={this.state.score} />
        <ListMenu stage={this.state.stage} />
        { 
          !this.state.gameOver?
            <>
              <Question
                nextQuestion={this.state.nextQuestion}
                questionData={this.state.questionData}
              />
              <div className="row">
                <AnswersBlock
                  answerOptions={this.state.answerOptions}
                  checkAnswer={this.checkAnswer}
                  next={this.state.nextQuestion}
                  checkedAnswers={this.state.checkedAnswers}
                />
                <Description
                  birdData={this.state.birdData ? this.state.birdData : {}}
                  checkedAnswers={this.state.checkedAnswers}
                />
              </div>
              <NextQuestion 
                nextLvl={this.nextLvl} 
                nextQuestion={this.state.nextQuestion}
              />
            </>
          :
            <>
              <GameOver 
                score={this.state.score}
                createNewGame={this.createNewGame}
              />
            </>
          }       
      </div>
    );
  }
}

export default App;
