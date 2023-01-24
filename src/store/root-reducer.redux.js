import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/categories.reducer';

const reducerMap = {
  user: userReducer,
  categories: categoriesReducer,
};

export const rootReducer = combineReducers(reducerMap);