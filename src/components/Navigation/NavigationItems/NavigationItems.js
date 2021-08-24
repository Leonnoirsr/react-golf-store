import React from "react";
import classes from "./NavigationItems.module.scss";
import Categorys from "../../../store-data/Categorys";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      {Categorys.map((category) => (
        <NavigationItem key={category.category} category={category} />
      ))}
    </ul>
  );
};

export default NavigationItems;
