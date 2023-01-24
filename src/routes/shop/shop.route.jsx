import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCategoriesMap } from '../../store/categories/categories.actions';
import { getCollectionAndDocuments } from '../../utils/firebase/firestore/firestore.util';

import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../../components/category/categories-preview/categories-preview.component';
import CategoryRoute from '../../routes/category/category.route';

const ShopRoute = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
     try {
      const categoryMap = await getCollectionAndDocuments('categories');
      dispatch(setCategoriesMap(categoryMap));
     } catch(error) {
      console.log(error);
     }
    }
    
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":category" element={<CategoryRoute />} />
    </Routes>
  );
}

export default ShopRoute;