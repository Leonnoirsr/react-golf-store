import React from "react";
import classes from "./CartItem.module.scss";

const CartItem = ({ cartItem }) => {
  const totalPrice = cartItem.price * cartItem.quantity;
  return (
    <div className={classes.CartItem}>
      <img src={cartItem.imageUrl}></img>
      <h4 className={classes.CartItem__Title}>{cartItem.title}</h4>
      <div className={classes.Quantity}>
        <p>Qty: {cartItem.quantity}</p>
        <p>x</p>
        <p>£{cartItem.price}</p>
      </div>
      <p>£{totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default CartItem;
