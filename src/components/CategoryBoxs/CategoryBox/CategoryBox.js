import React from "react";
import classes from "./CategoryBox.module.scss";

const CategoryBox = (props) => {
  console.log(props);
  return (
    <div className={classes.CategoryBox}>
      <img src={props.category.imageUrl} />
      <h3>{props.category.label}</h3>
    </div>
  );
};

export default CategoryBox;
