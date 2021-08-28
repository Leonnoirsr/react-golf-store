import React from "react";
import classes from "./CartItem.module.scss";
import CartItemImage from "./CartItemImage/CartItemImage";
import CartItemQty from "./CartItemQty/CartItemQty";
import CartItemRowTotal from "./CartItemRowTotal/CartItemRowTotal";

const CartItem = ({ cartItem }) => {
  return (
    <div className={classes.CartItem}>
      <CartItemImage cartItem={cartItem} />
      <CartItemQty cartItem={cartItem} />
      <CartItemRowTotal cartItem={cartItem} />
    </div>
  );
};

export default CartItem;
