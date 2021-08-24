import React from "react";
import classes from "./ProductActions.module.scss";
const ProductActions = (props) => {
  return (
    <div className={classes.Actions}>
      <button className={classes.AddToCartButton}>Add to Cart</button>
      <button className={classes.DetailButton}>Details</button>
    </div>
  );
};
export default ProductActions;
