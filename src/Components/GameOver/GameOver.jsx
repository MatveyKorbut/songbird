import React from "react";
import "./style.css";
import { Typography } from "@material-ui/core";

export default (props) => {
    const {score, createNewGame} = props;
    let congratsText = "";
    if (score < 30) {
        congratsText = `Вы прошли викторину и набрали ${score} из 30 возможных баллов`
    }
    if (score === 30) {
        congratsText = "Абсолютная победа! Вы прошли викторину и набрали максимальное количество возможных баллов"

    }
    return (
        <div style={{backgroundColor: "#303030", margin: "25px 0", borderRadius: "5px"}}>
            <Typography variant="h2" align="center">
                Поздравляем!
            </Typography>
            <Typography variant="h3" align="center">
                {congratsText}
            </Typography>
            <button 
                onClick={()=>{
                    createNewGame();
                }} 
                className={"active"}
            >
                Сыграть еще раз
            </button>
        </div>
    )
}