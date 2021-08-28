import React from "react";
import classes from "../CartItem.module.scss";

const CartItemImage = ({ cartItem }) => (
  <img
    className={classes.CartItem__Image}
    src={cartItem.imageUrl}
    alt={cartItem.title}
  />
);

export default CartItemImage;
