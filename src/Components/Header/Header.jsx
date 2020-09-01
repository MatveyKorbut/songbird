import React from "react";
import "./style.css";
import { Typography } from "@material-ui/core";

export default (props) => {
  const score = props.score
  return (
    <div className="header">
      <div className="logo"></div>
      <Typography variant="h5">
        Score: {score}
      </Typography>
        
    </div>
  );
};
