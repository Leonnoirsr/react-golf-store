import React from "react";
import classes from "./Logo.module.scss";
import LogoImage from "./logo.png";
const Logo = (props) => {
  return (
    <div className={classes.LogoContainer}>
      <img src={LogoImage} />
    </div>
  );
};

export default Logo;
