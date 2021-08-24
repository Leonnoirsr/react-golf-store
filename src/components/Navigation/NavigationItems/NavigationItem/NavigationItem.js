import React from "react";
import classes from "./NavigationItem.module.scss";
import NavigationItemDropdown from "./NavigationItemDropdown/NavigationItemDropdown";

const NavigationItem = ({ category }) => {
  return (
    <li
      className={`${classes.NavigationItem} ${
        category.category === "Sale" ? "orange" : ""
      }`}
    >
      {category.category}
      <NavigationItemDropdown
        category={category.category}
        className={classes.Dropdown}
        subCategorys={category["sub-categorys"]}
      />
    </li>
  );
};

export default NavigationItem;
