import React from "react";
import classes from "./Backdrop.module.scss";

const Backdrop = (props) => (
  <div onClick={props.toggleViewingCart} className={classes.Backdrop}></div>
);

export default Backdrop;
