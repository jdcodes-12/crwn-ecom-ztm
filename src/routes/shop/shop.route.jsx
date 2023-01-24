import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCategories } from '../../store/categories/categories.actions';
import { getCollectionAndDocuments } from '../../utils/firebase/firestore/firestore.util';

import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../../components/category/categories-preview/categories-preview.component';
import CategoryRoute from '../../routes/category/category.route';

const ShopRoute = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoryMap = async () => {
     try {
      const categoriesArray = await getCollectionAndDocuments('categories');
      console.log(categoriesArray);
      dispatch(setCategories(categoriesArray));
     } catch(error) {
      console.log(error);
     }
    }
    
    getCategoryMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":category" element={<CategoryRoute />} />
    </Routes>
  );
}

export default ShopRoute;