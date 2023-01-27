import CATEGORIES_ACTION_TYPES from './categories.types';
import { createAction } from '../../utils/reducer/reducer.utils';
import { getCollectionAndDocuments } from '../../utils/firebase/firestore/firestore.util';

export const fetchCategoriesStart = () => {
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
};

export const fetchCategoriesSuccess = (categoriesArray) => {
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);
}

export const fetchCategoriesFail = (error) => {
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, error);
};

export const fetchCategoriesThunkAsync = async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categoriesArray = await getCollectionAndDocuments('categories');
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch(error) {
    fetchCategoriesFail(error);
  }
}