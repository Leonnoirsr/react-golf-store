import React from "react";
import classes from "./MobileNavigationItems.module.scss";
import Categorys from "../../../../store-data/Categorys";
import MobileNavigationItem from "./MobileNavigationItem/MobileNavigationItem";
import ToggleButton from "../ToggleButton";

const MobileNavigationItems = (props) => {
  return (
    <ul
      className={classes.MobileNavigationItems}
      style={{ transform: props.show ? "translateX(0)" : "translateX(-100%)" }}
    >
      <ToggleButton
        onClick={props.toggleMobileNav}
        className={classes.ToggleButton}
      />
      {Categorys.map((category) => (
        <MobileNavigationItem key={category.category} category={category} />
      ))}
    </ul>
  );
};

export default MobileNavigationItems;
