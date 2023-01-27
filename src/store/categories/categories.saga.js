import { takeLatest, all, call, put } from 'redux-saga/effects';

import CATEGORIES_ACTION_TYPES from './categories.types';
import { fetchCategoriesSuccess, fetchCategoriesFail } from './categories.actions';

import { getCollectionAndDocuments } from '../../utils/firebase/firestore/firestore.util';

// Runs generator-based saga for fetching categories.
// Handles errors & making the API call to firestore to fetch categories collection.
export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCollectionAndDocuments, 'categories');
    yield put(fetchCategoriesSuccess(categoriesArray));

  } catch(error) {
    yield put(fetchCategoriesFail(error));
  }
};

// Starts the fetching process for cateogires. Starts the saga.
export function* onFetchCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
};

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
};