import React, { Component } from "react";
import "./style.css";
import { Typography} from "@material-ui/core";


export default (props) => {
  const stage = props.stage;
  const menuTypes = ["Разминка", "Воробьиные", "Лесные птицы", "Певчие птицы", "Хищные птицы", "Морские птицы"];

  return (
    <ul className="list">
    {menuTypes.map((item, idx) => {
      const itemClass = (stage === idx) ? 'list-item-active' : 'list-item';
      return (
        <li className={itemClass} key={item}>
          <Typography>
             {item}
          </Typography>
        </li>
      );
    })}
  </ul>
  )
};
