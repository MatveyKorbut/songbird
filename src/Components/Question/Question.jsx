import React, { Component } from "react";
import "./style.css";
import { Typography, List, ListItem } from "@material-ui/core";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import defaultBird from "./img/defaultBird.jpg";

export default (props) => {
  const birdRussianName = props.birdRussianName || "*****";
  const sound = props.sound || "";
  const style = {
    backgroundColor: "#303030",
  }
  return (
    <div className="question-block">
      <img src={defaultBird} />
      <div className="info">
        <List>
          <ListItem>
            <Typography variant="h3">
              {birdRussianName}
            </Typography>
          </ListItem>
          <ListItem>
          <AudioPlayer

            src={sound}
            showJumpControls={false}
            customAdditionalControls={[]}
            style={style}
          // Try other props!
          />
          </ListItem>
        </List>
      </div>
    </div>
  );
};
