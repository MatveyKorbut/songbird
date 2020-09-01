import React from "react";
import "./style.css";
import { Typography, List, ListItem } from "@material-ui/core";
import ReactAudioPlayer from 'react-audio-player';

import defaultBird from "./img/defaultBird.jpg";

export default (props) => {
  const { nextQuestion, questionData} = props;

  const { name, showName, showImg, sound } = questionData;
  
  const style = {
    backgroundColor: "#303030",
    width: "100%"
  };
  
  return (
    <div className="question-block">
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src={ nextQuestion ?  showImg : defaultBird} alt="bird"  style={{padding: "0 0"}}/>
      </div>
      <div className="info">
        <List>
          <ListItem>
            {
              nextQuestion ?
                <>
                  <Typography variant="h3">{showName}</Typography>
                </>          
              :
                <>
                  <Typography variant="h3">{name}</Typography>
                </>
            }
            
          </ListItem>
          <ListItem>
            <ReactAudioPlayer
              id = "questionAudio"
              src={sound}
              controls
              style={style}
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
};
