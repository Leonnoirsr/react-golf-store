import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../ReduxStore/cart-slice";
import classes from "../CartItem.module.scss";

const CartItemQty = ({ cartItem }) => {
  const dispatch = useDispatch();

  const increaseQuantityHandler = () => {
    dispatch(cartActions.addToCart(cartItem));
  };
  const decreaseQuantityHandler = () => {
    dispatch(cartActions.decreaseCartQuantity(cartItem));
  };

  const productSale = cartItem.saleItem;
  return (
    <div className={classes.Quantity}>
      <p className={classes.CartItem__Title}>{cartItem.title}</p>
      <p
        style={{
          textDecoration: productSale ? "line-through" : "",
          color: productSale ? "#ccc" : "",
        }}
        className={classes.CartItem__Price}
      >
        £{cartItem.price}
      </p>
      {productSale && (
        <p className={classes.CartItem__SalePrice}>£{cartItem.newPrice}</p>
      )}
      <div className={classes.QuantityInput}>
        <div
          className={classes.QuantityButton}
          role="button"
          onClick={decreaseQuantityHandler}
        >
          -
        </div>

        <div className={classes.QuantityAmount}>
          <p>{cartItem.quantity}</p>
        </div>
        <div
          className={classes.QuantityButton}
          role="button"
          onClick={increaseQuantityHandler}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default CartItemQty;
