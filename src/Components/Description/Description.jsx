import React from "react";
import "./style.css";
import { Typography } from "@material-ui/core";
import ReactAudioPlayer from 'react-audio-player';

export default (props) => {
  const {birdData, checkedAnswers} = props;
  const {image, name, species, description, audio} = birdData;
  const style = {
    backgroundColor: "#303030",
    display: "block",
    width: "100%"
  };

  return (
    <div className="block">
      { name && checkedAnswers.length ? (
        <div>
         <div className="box">
            <img
              className="img"
              src={image}
              alt="bird"
            />
            <div className="info">
              <p className="name">
                {name}
              </p>
              <p className="species">
                {species}
              </p>

            </div>
          </div>
          <ReactAudioPlayer
              src={audio}
              autoPlay={false}
              controls
              showJumpControls={false}
              customAdditionalControls={[]}
              style={style}
            />
          <div className="text-wrapper">
            {description}
          </div>
        </div>
      ) : (
        <>
          <Typography variant="h5">Послушайте плеер.</Typography>
          <Typography variant="h5">Выберите птицу из списка</Typography>
        </>
      )}
    </div>
  );
};
