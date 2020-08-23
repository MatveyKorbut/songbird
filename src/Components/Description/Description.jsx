import React from "react";
import "./style.css";
import { Typography } from "@material-ui/core";

export default (props) => {
  const show = props.nextQuestion;
  console.log("show is description component", show)
  
  return (
    <div className="block">
      {
        show ?
          <>
          </>
        : 
          <>
          <Typography variant="h5">
            Послушайте плеер.
          </Typography>
          <Typography variant="h5">
            Выберите птицу из списка
          </Typography>
          </>
      }
    </div>
  );
};
