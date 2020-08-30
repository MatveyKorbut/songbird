import React, { Component } from "react";
import "./style.css";
import { Typography } from "@material-ui/core";

// export default (props) => {
 
// };

class Answer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spanClass: "answer-indicator "
    }
  }
  
  changeSpanClass = (bool) => {
    const changeString = (bool ? "answer-indicator answer-indicator-true" : "answer-indicator answer-indicator-false")
    this.setState({spanClass: changeString})
  } 
  render() {
    const { name, id, checkAnswer } = this.props;

    // const spanRef = useRef(null)
    let color = null;
    return (
      <>
      <li 
        className="answer" 
        onClick={()=>{
          color = checkAnswer(id);
          this.changeSpanClass(color)
        }}
      >
        <Typography variant="h6">
          <span 
            className={this.state.spanClass}
            // ref={spanRef}
          />
          {name}
        </Typography>
      </li>
      </>
    );
  }
}

export default Answer