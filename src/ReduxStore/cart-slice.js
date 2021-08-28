import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartItems: [],
  viewingCart: false,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {
      const product = { ...action.payload };
      const index = state.cartItems.findIndex(
        (cartItem) => cartItem.id === product.id
      );

      if (index !== -1) {
        state.cartItems[index].quantity = state.cartItems[index].quantity + 1;
      } else {
        product.quantity = 1;
        state.cartItems.push(product);
      }
    },
    decreaseCartQuantity: (state, action) => {
      const product = { ...action.payload };

      const index = state.cartItems.findIndex(
        (cartItem) => cartItem.id === product.id
      );

      if (index !== -1) {
        if (state.cartItems[index].quantity <= 1) {
          state.cartItems.splice(index, 1);
        } else {
          state.cartItems[index].quantity = state.cartItems[index].quantity - 1;
        }
      } else {
        return;
      }
    },
    removeFromCart: (state, action) => {
      const product = { ...action.payload };

      const index = state.cartItems.findIndex(
        (cartItem) => cartItem.id === product.id
      );
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      } else {
        return;
      }
    },
    toggleViewingCart: (state, action) => {
      state.viewingCart = state.viewingCart ? false : true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
