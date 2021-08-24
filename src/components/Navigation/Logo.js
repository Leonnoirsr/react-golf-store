import React from "react";
import classes from "./Logo.module.scss";
import LogoImage from "./logo.png";
const Logo = (props) => {
  return (
    <div className={classes.LogoContainer}>
      <img src={LogoImage} alt="logo" />
      <div className={classes.SomeotherClass}>
        <div className={classes.AnotherClass}></div>
      </div>
    </div>
  );
};

export default Logo;
