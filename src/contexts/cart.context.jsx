import React, { createContext, useEffect, useState } from 'react';

export const updateCart = (cartItems, product) => {
  const existingItem = cartItems.find(item => item.id === product.id);
  console.log(existingItem);
  if (existingItem) {
    return cartItems.map(item => 
      item.id === product.id ? 
        { ...item, quantity: item.quantity + 1 } :
        item
    );
  }
  return [...cartItems, {...product, quantity: 1}];
}

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addProductToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addProductToCart = (product) => 
    setCartItems(updateCart(cartItems, product));
  

  useEffect(() => {
    const updatedCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(updatedCartCount);
  }, [cartItems]);

  const value = {
    isOpen,
    setIsOpen,
    cartItems,
    addProductToCart,
    cartCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  ) 
}