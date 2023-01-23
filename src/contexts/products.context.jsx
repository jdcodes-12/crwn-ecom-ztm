import React, { createContext, useState, useEffect } from 'react';
import { SHOP_DATA } from '../data/products.data';
import { addCollectionAndDocuments } from '../utils/firebase/firestore/firestore.util';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  
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