import React, { useContext } from 'react';
import { CartContext } from '../../../contexts/cart.context';
import {
  CartIconContainer,
  ShoppingBagIcon,
} from './cart-icon.styles';

const CartIcon = () => {
  const { isOpen, setIsOpen, cartCount } = useContext(CartContext);

  const toggleCardDropdown = () => setIsOpen(!isOpen);

  return (
   <CartIconContainer onClick={toggleCardDropdown}>
    <ShoppingBagIcon />
    <span className="item-count">{cartCount}</span>
   </CartIconContainer>
  );
}

export default CartIcon;