import React, { createContext, useReducer } from 'react';

export const CartContext = createContext({
  isOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  setIsOpen: () => {},
  addProductToCart: () => {},
  decrementProductQuantity: () => {},
  clearCartItem: () => {},
  calculateTotal: () => {}
});


const CART_ACTION_TYPES = {
  TOGGLE_OPEN: '',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  GET_CART_ITEMS: '',
  GET_CART_COUNT: '',
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  
  switch(type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      }
    default: 
      throw new Error(`Unhandled action type ${type} in cartReducer`);
  }
};

const CART_INITIAL_STATE = {
  cartCount: 0,
  cartTotal: 0,
  cartItems: [],
  isOpen: true,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);
  const { isOpen, cartItems, cartCount, cartTotal } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, item) => total + item.quantity, 0);
    const newCartTotal = newCartItems.reduce((total, item) => total + item.quantity * item.price, 0);

    dispatch({ 
      type: CART_ACTION_TYPES.SET_CART_ITEMS, 
      payload: {
        cartTotal: newCartTotal,
        cartCount: newCartCount,
        cartItems: newCartItems,
      }
    });
  }

  const addProductToCart = (product) => {
    const newCartItems = updateCart(cartItems, product);
    updateCartItemsReducer(newCartItems);
  } 

  const decrementProductQuantity = (product) => {
    const newCartItems = updateCart(cartItems, product, 'decrement');
    updateCartItemsReducer(newCartItems);
  }

  const clearCartItem = (product) => {
    const newCartItems = updateCart(cartItems, product, 'clear');
    updateCartItemsReducer(newCartItems);
  }

  const value = {
    isOpen,
    cartItems,
    cartCount,
    cartTotal,
    setIsOpen: () => {},
    addProductToCart,
    decrementProductQuantity,
    clearCartItem,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}


export const updateCart = (cartItems, product, action='increment') => {
  const existingItem = cartItems.find(item => item.id === product.id);

  if (existingItem && action === 'increment') {
    return cartItems.map(item => 
      item.id === product.id ? 
        { ...item, quantity: item.quantity + 1 } :
        item
    );
  }

  else if (existingItem && action === 'decrement') {
    if (existingItem.quantity === 1) {
      return cartItems.filter(item => item.id !== product.id)

    } else {
      return cartItems.map(item =>
        item.id === product.id ?
          { ...item, quantity: item.quantity - 1 } :
          item
      );
    } 
  } 
  
  else if (existingItem && action === 'clear') {
    return cartItems.filter(item => item.id !== product.id);
  }

  return [...cartItems, {...product, quantity: 1}];
}