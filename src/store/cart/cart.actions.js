import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsOpen = (boolean) => createAction(CART_ACTION_TYPES.TOGGLE_OPEN, boolean);

export const addProductToCart = (cartItems, product) => {
  const updatedCartItems = _addProductItemToCart(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
}

export const removeProductFromCart = (cartItems, product) => {
  const updatedCartItems = _removeProductItemFromCart(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
}

export const clearProductFromCart = (cartItems, product) => {
  const updatedCartItems = _clearProductItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
}


// Helpers
const _addProductItemToCart = (cartItems, product) => {
  const existingProduct = cartItems.find(item => item.id === product.id);

  if (existingProduct) {
    return cartItems.map(
      item => item.id === product.id 
        ? { ...item, quantity: item.quantity + 1 } 
        : item
    );
  }

  return [...cartItems, { ...product, quantity: 1}];
} 

const _removeProductItemFromCart = (cartItems, product) => {
  const existingProduct = cartItems.find(item => item.id === product.id);
  
  if (existingProduct.quantity === 1) {
    return cartItems.filter(item => item.id !== product.id);
  }

  return cartItems.map(
    item => item.id === product.id 
      ? { ...item, quantity: item.quantity - 1 } 
      : item
  );
}

const _clearProductItem = 
  (cartItems, product) => cartItems.filter(item => item.id !== product.id);
