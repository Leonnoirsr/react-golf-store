import React from "react";
import classes from "./NavigationItemDropdown.module.scss";
import NavigationItemDropdownItem from "./NavigationItemDropdownItem/NavigationItemDropdownItem";

const NavigationItemDropdown = (props) => {
  return (
    <ul className={`${classes.NavigationItemDropdown} ${props.className}`}>
      {props.subCategorys.map((subCategory) => (
        <NavigationItemDropdownItem
          key={subCategory.label}
          category={props.category}
          subCategory={subCategory}
        />
      ))}
    </ul>
  );
};

export default NavigationItemDropdown;
