import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/categories.reducer';
import { cartReducer } from './cart/cart.reducer';

const reducerMap = {
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
};

export const rootReducer = combineReducers(reducerMap);