import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { fetchCategoriesStart } from '../../store/categories/categories.actions';

import CategoriesPreview from '../../components/category/categories-preview/categories-preview.component';
import CategoryRoute from '../../routes/category/category.route';

const ShopRoute = () => {
  const dispatch = useDispatch();

  // categoriesSaga is listening to fetchCategoriesStart()
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":category" element={<CategoryRoute />} />
    </Routes>
  );
}

export default ShopRoute;