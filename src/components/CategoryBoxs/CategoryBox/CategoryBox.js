import React from "react";
import classes from "./CategoryBox.module.scss";
import { Link } from "react-router-dom";
const CategoryBox = (props) => {
  console.log(props);
  return (
    <Link to={props.category.link} className={classes.CategoryBox}>
      <img src={props.category.imageUrl} alt={props.category.label} />
      <h3>{props.category.label}</h3>
    </Link>
  );
};

export default CategoryBox;
