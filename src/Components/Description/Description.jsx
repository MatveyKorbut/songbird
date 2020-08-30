import React from "react";
import "./style.css";
import { Typography } from "@material-ui/core";
import AudioPlayer from "react-h5-audio-player";

export default (props) => {
  const {birdData} = props;
  const {image, name, species, description, audio} = birdData;
  const style = {
    backgroundColor: "#303030",
  };

  return (
    <div className="block">
      { name ? (
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
          <AudioPlayer
              src={audio}
              autoPlay={false}
              showJumpControls={false}
              customAdditionalControls={[]}
              style={style}
            />
          <div className="text_wrapper">
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
