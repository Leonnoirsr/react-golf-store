import React from "react";
import classes from "./BannerBar.module.scss";

const BannerBar = (props) => {
  return (
    <div className={classes.BannerBar} role="banner">
      <p>{props.children}</p>
    </div>
  );
};

export default BannerBar;
