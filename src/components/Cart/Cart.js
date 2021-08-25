import React from "react";
import { useSelector } from "react-redux";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const viewingCart = useSelector((state) => state.cart.viewingCart);
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div
      style={{ transform: props.show ? "translateX(0)" : "translateX(100%)" }}
      className={classes.Cart}
    >
      {cartItems.length === 0 && <p>No items in your cart!</p>}
      {cartItems.length > 0 &&
        cartItems.map((cartI) => <CartItem cartItem={cartI} />)}
    </div>
  );
};

export default Cart;
