import React, { createContext,  useState } from 'react';

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const value = {
    isOpen,
    setIsOpen,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

