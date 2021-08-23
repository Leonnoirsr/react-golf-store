import React from "react";
import classes from "./ProductData.module.scss";
const ProductData = (props) => {
  return (
    <div className={classes.ProductData}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>£{props.price}</p>
    </div>
  );
};
export default ProductData;
