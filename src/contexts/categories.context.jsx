import React, { createContext, useState, useEffect } from 'react';
import { getCollectionAndDocuments } from '../utils/firebase/firestore/firestore.util';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  
  useEffect(() => {
    const getCategoryMap = async () => {
     try {
      const categoryMap = await getCollectionAndDocuments('categories');
      setCategoriesMap(categoryMap);
     } catch(error) {
      console.log(error);
     }
    }
    
    getCategoryMap();
  }, []);

  const value = {
    categoriesMap,
    setCategoriesMap,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}