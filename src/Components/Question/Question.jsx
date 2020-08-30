import React from "react";
import "./style.css";
import { Typography, List, ListItem } from "@material-ui/core";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import defaultBird from "./img/defaultBird.jpg";

export default (props) => {
  const { nextQuestion, questionData} = props;

  const { name, showName, showImg, sound } = questionData;
  
  const style = {
    backgroundColor: "#303030",
  };
  
  return (
    <div className="question-block">
      <img src={ nextQuestion ?  showImg : defaultBird} alt="bird" />
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
            <AudioPlayer
              id = "questionAudio"
              src={sound}
              pause={nextQuestion}
              autoPlay={false}
              showJumpControls={false}
              customAdditionalControls={[]}
              style={style}
              // onListen={(e)=> {
              //   console.log("player ", e.target.paused);
              //   if (nextQuestion) {
              //     e.target.pause();
              //   }
              // }}
              // Try other props!
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
};
