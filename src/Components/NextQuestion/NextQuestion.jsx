import React from "react";
import "./style.css";

export default (props) => {
    const {nextLvl, nextQuestion} = props;
    return (
        <>
        <button onClick={nextLvl} className={nextQuestion? "active" : ""}>
            Next Level
        </button>
        </>
    )
}