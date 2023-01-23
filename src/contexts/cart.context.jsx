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

  return [...cartItems, {...product, quantity: 1}];
}

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addProductToCart: () => {},
  decrementProductQuantity: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addProductToCart = (product) => 
    setCartItems(updateCart(cartItems, product));
  
  const decrementProductQuantity = (product) => 
    setCartItems(updateCart(cartItems, product, 'decrement'));

  useEffect(() => {
    const updatedCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(updatedCartCount);
  }, [cartItems]);

  const value = {
    isOpen,
    setIsOpen,
    cartItems,
    addProductToCart,
    decrementProductQuantity,
    cartCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}