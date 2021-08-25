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
      const product = action.payload;
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
    removeFromCart: (state, action) => {},
    toggleViewingCart: (state, action) => {
      state.viewingCart = state.viewingCart ? false : true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
