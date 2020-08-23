import React from "react";
import "./style.css";
import { Typography, Link } from "@material-ui/core";

export default (props) => {
  const { name, id } = props;

  return (
    <li className="answer">
      <Typography variant="h6">
        <span className="answer-indicator" />
        {name}
      </Typography>
    </li>
  );
};
