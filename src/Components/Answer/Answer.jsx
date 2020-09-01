import React, { Component, useState } from "react";
import "./style.css";
import { Typography } from "@material-ui/core";
import { useRef } from "react";

export default ({name, id, checkAnswer, next, checkedAnswers}) => {
  let color = null;
  let spanRef = useRef(null)
  if (!checkedAnswers.length) {
    if (spanRef.current) {
      spanRef.current.style.backgroundColor = ""
    }
  }
  return(
    <>
      <li 
        className="answer" 
        onClick={()=>{
          color = checkAnswer(id);
            if (!next) {
            if (color) {
              if (spanRef.current) {
                spanRef.current.style.backgroundColor = "green"
              }
            } else {
              spanRef.current.style.backgroundColor = "red"
            }
          }
        }}
      >
        <Typography variant="h6">
          <span
            ref={spanRef}
            className={"answer-indicator"}
          />
          {name}
        </Typography>
      </li>
      </>
  )


};

// class Answer extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       spanClass: "answer-indicator "
//     }
//   }
  
//   componentDidMount() {
//     this.setState({spanClass: "answer-indicator "})
//   }

 
//   changeSpanClass = (bool) => {
//     const changeString = (bool ? "answer-indicator answer-indicator-true" : "answer-indicator answer-indicator-false")
//     this.setState({spanClass: changeString})
//   } 

//   setDefaultColor = () => {
//     console.log("setDefColor")
//   }

//   render() {
//     const { name, id, checkAnswer, next, checkedAnswers } = this.props;

//     let color = null;
    
//     return (
//       <>
//       <li 
//         className="answer" 
//         onClick={()=>{
//           color = checkAnswer(id);
//           if (!next) {
//             this.changeSpanClass(color)
//           }
//         }}
//       >
//         <Typography variant="h6">
//           <span 
//             // className={this.state.spanClass}
//           />
//           {name}
//         </Typography>
//       </li>
//       </>
//     );
//   }
// }

// export default Answer