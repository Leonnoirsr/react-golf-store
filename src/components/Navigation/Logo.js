import React from "react";
import classes from "./Logo.module.scss";
import LogoImage from "./logo.png";
const Logo = (props) => {
  return (
    <div className={classes.LogoContainer}>
      <img src={LogoImage} />
      <div className={classes.SomeotherClass}>
        <h1></h1>
        <div className={classes.AnotherClass}></div>
      </div>
    </div>
  );
};

export default Logo;
