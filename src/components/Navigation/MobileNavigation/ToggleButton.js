import React from "react";
import classes from "./ToggleButton.module.scss";

const ToggleButton = (props) => {
  return (
    <div
      className={`${classes.ToggleButton} ${props.className}`}
      onClick={props.onClick}
      role="button"
    >
      <span className={classes.Bar}></span>
      <span className={classes.Bar}></span>
      <span className={classes.Bar}></span>
      <span className={classes.Bar}></span>
    </div>
  );
};

export default ToggleButton;
