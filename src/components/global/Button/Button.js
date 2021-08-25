import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => (
  <button
    onClick={props.onClick}
    className={`${classes.Button} ${props.className}`}
    type={props.type ? props.type : "button"}
  >
    {props.children}
  </button>
);

export default Button;
