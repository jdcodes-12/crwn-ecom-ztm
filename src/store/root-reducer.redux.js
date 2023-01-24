import { combineReducers } from "redux";
import { userReducer } from './user/user.reducer';
// import { cartReducer } from './cart/cart.reducer';


const reducerMap = {
  user: userReducer,
  // cart: cartReducer,
}

export const rootReducer = combineReducers(reducerMap);