import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectCartIsOpen} from '../../../store/cart/cart.selectors';
import { setIsOpen } from '../../../store/cart/cart.actions';

import {
  CartIconContainer,
  ShoppingBagIcon,
  ItemCount,
} from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isOpen = useSelector(selectCartIsOpen);
  
  const toggleIsOpen = () => dispatch(setIsOpen(!isOpen));

  return (
   <CartIconContainer onClick={toggleIsOpen}>
    <ShoppingBagIcon />
    <ItemCount>{cartCount}</ItemCount>
   </CartIconContainer>
  );
}

export default CartIcon;