import React, { createContext, useState, useEffect } from 'react';
import PRODUCTS from '../data/products.data.json';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null
});


export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  
  const value = {
    products,
    setProducts,
  };
  
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}