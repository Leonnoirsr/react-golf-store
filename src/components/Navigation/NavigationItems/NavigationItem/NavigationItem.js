import React from "react";
import Navigation from "../../Navigation";
import classes from "./NavigationItem.module.scss";
import NavigationItemDropdown from "./NavigationItemDropdown/NavigationItemDropdown";
import NavigationItemDropdownItem from "./NavigationItemDropdown/NavigationItemDropdownItem/NavigationItemDropdownItem";

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
