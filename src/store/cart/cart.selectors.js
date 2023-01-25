import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartIsOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, item) => (item.price * item.quantity) + total, 0)
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((count, item) => item.quantity + count, 0)
);

