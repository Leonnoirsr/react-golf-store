import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./Cart.module.scss";
import Button from "../global/Button/Button";
import CartItem from "./CartItem/CartItem";
const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice =
    cartItems.length > 0 &&
    cartItems
      .map((cartItem) => {
        return cartItem.newPrice
          ? cartItem.newPrice * cartItem.quantity
          : cartItem.price * cartItem.quantity;
      })
      .reduce(function (cur, prev) {
        return cur + prev;
      });

  return (
    <div
      style={{ transform: props.show ? "translateX(0)" : "translateX(100%)" }}
      className={classes.Cart}
    >
      <div>
        <p style={{ textAlign: "center" }}>Your Cart</p>
        <ul className={classes.AllCartItems}>
          {cartItems.length > 0 ? (
            cartItems.map((cartItem) => {
              return (
                <li>
                  <CartItem cartItem={cartItem} />
                </li>
              );
            })
          ) : (
            <p style={{ textAlign: "center" }}>No Items in your cart</p>
          )}
        </ul>
      </div>

      <div>
        {totalPrice && (
          <div className={classes.TotalPrice}>
            <h4>Total:</h4>
            <p>£{totalPrice.toFixed(2)}</p>
          </div>
        )}
        {cartItems.length > 0 && (
          <Fragment>
            <Button className="orange">Proceed to checkout</Button>
            <Button onClick={props.toggleViewingCart} className="orange">
              Continue Shopping
            </Button>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Cart;
