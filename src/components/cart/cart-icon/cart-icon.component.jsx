import React from 'react';
import { ReactComponent as ShoppingBagIcon } from '../../../assets/icons/bag-icon.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {
  return (
   <div className="cart-icon-container">
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">0</span>
   </div>
  );
}

export default CartIcon;