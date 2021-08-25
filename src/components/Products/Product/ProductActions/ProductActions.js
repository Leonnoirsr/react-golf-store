import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../ReduxStore/cart-slice";
import classes from "./ProductActions.module.scss";
import Button from "../../../global/Button/Button";
const ProductActions = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart(product));
  };
  return (
    <div className={classes.Actions}>
      <Button
        onClick={addToCartHandler}
        className={`${classes.AddToCartButton}`}
      >
        Add to Cart
      </Button>
      <Button className={classes.DetailButton}>Details</Button>
    </div>
  );
};
export default ProductActions;
