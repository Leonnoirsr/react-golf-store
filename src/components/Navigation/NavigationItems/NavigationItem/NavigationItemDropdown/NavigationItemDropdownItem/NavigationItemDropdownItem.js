import React from "react";
import classes from "./NavigationItemDropdownItem.module.scss";
import { Link } from "react-router-dom";
const NavigationItemDropdownItem = ({ category, subCategory }) => {
  return (
    <Link
      to={`/shop/${category.toLowerCase()}/${subCategory.label
        .replaceAll(" ", "-")
        .toLowerCase()}`}
    >
      <li className={classes.NavigationItemDropdownItem}>
        <img src={subCategory.imageUrl} alt={subCategory.label} />
        <p>{subCategory.label}</p>
      </li>
    </Link>
  );
};

export default NavigationItemDropdownItem;
