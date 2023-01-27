import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategoriesThunkAsync } from '../../store/categories/categories.actions';

import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../../components/category/categories-preview/categories-preview.component';
import CategoryRoute from '../../routes/category/category.route';

const ShopRoute = () => {
  const dispatch = useDispatch();

  // Dispatch the asynchronous flow of fetching categories by using
  // the thunk function in categories.action. Handles start, success
  // and failed states.
  useEffect(() => {
    dispatch(fetchCategoriesThunkAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":category" element={<CategoryRoute />} />
    </Routes>
  );
}

export default ShopRoute;