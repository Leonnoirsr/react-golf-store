import React from "react";
import classes from "./ProductData.module.scss";
const ProductData = (props) => {
  const savings = props.price - props.newPrice;
  return (
    <div className={classes.ProductData}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className={classes.Price}>
        <p className={`${props.newPrice ? classes.OldPrice : ""}`}>
          £{props.price}
        </p>
        {props.newPrice && (
          <p className={classes.NewPrice}>£{props.newPrice}</p>
        )}
      </div>
      {props.newPrice && (
        <p className={classes.Savings}>Save: £{savings.toFixed(2)}</p>
      )}
    </div>
  );
};
export default ProductData;
