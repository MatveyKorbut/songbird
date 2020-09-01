import React, {Component} from "react";
import "./style.css";
import Answer from "../Answer/Answer";


class AnswerBlock extends Component {
  
  render() {
  const {answerOptions, checkAnswer, next, checkedAnswers} = this.props
  return (
    <div className="answers-block">
      <ul>
        {answerOptions.map((item, idx) => {
          return (
              <Answer 
                key={idx}
                next={next}
                name={item.name} 
                id={idx}
                checkAnswer={checkAnswer}
                checkedAnswers={checkedAnswers}
                />
          )
        })}
        </ul>
    </div>
  );
  }
}

export default AnswerBlock;
