import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { fetchCategoriesStartAsyncThunk } from '../../store/categories/categories.actions';

import CategoriesPreview from '../../components/category/categories-preview/categories-preview.component';
import CategoryRoute from '../../routes/category/category.route';

const ShopRoute = () => {
  const dispatch = useDispatch();

  // Dispatch the asynchronous flow of fetching categories. Sets
  // the state of categoriesReducer's isLoading to `true`. This
  // will trigger the conditional rendering of Spinner in
  // CategoriesPreview & CategoryRoute.
  useEffect(() => {
    dispatch(fetchCategoriesStartAsyncThunk());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":category" element={<CategoryRoute />} />
    </Routes>
  );
}

export default ShopRoute;