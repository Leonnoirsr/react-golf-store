import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../ReduxStore/cart-slice";
import classes from "./ProductActions.module.scss";
const ProductActions = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart(product));
  };
  return (
    <div className={classes.Actions}>
      <button onClick={addToCartHandler} className={classes.AddToCartButton}>
        Add to Cart
      </button>
      <button className={classes.DetailButton}>Details</button>
    </div>
  );
};
export default ProductActions;
