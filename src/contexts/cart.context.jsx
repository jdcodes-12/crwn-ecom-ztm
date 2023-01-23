import React, { createContext, useEffect, useState } from 'react';

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

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addProductToCart = (product) => 
    setCartItems(updateCart(cartItems, product));
  
  const decrementProductQuantity = (product) => 
    setCartItems(updateCart(cartItems, product, 'decrement'));

  const clearCartItem = (product) => 
    setCartItems(updateCart(cartItems, product, 'clear'));

  
  useEffect(() => {
    const updatedCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(updatedCartCount);
  }, [cartItems]);

  useEffect(() => {
    const updatedCartTotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    setCartTotal(updatedCartTotal);
  }, [cartItems]);

  const value = {
    isOpen,
    cartItems,
    cartCount,
    cartTotal,
    setIsOpen,
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