import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../ReduxStore/cart-slice";
import classes from "../CartItem.module.scss";

const CartItemRowTotal = ({ cartItem }) => {
  const dispatch = useDispatch();
  const productSale = cartItem.saleItem;
  const totalPrice = productSale
    ? cartItem.newPrice * cartItem.quantity
    : cartItem.price * cartItem.quantity;

  const totalSavings =
    cartItem.price * cartItem.quantity - cartItem.newPrice * cartItem.quantity;
  const removeFromCartHandler = () => {
    dispatch(cartActions.removeFromCart(cartItem));
  };
  return (
    <div className={classes.Container}>
      <p className={classes.RowTotal__Price}>£{totalPrice.toFixed(2)}</p>

      <div
        className={classes.RemoveFromCartButton}
        role="button"
        onClick={removeFromCartHandler}
      >
        &#215;
      </div>
      {productSale && (
        <div className={classes.Savings}>
          <p>You save</p>
          <p>£{totalSavings.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default CartItemRowTotal;
