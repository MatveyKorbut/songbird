import React, { Component } from "react";
import "./style.css";
import { Typography, List, ListItem } from "@material-ui/core";
import Answer from "../Answer/Answer";

export default (props) => {
  const answerOptions = props.answerOptions;
  console.log("answerOptions", answerOptions)
  return (
    <div className="answers-block">
      <ul>
        {answerOptions.map((item, idx) => {
          return (
              <Answer name={item.name} id={idx}/>
          )
        })}
        </ul>
    </div>
  );
};
