import React, { useContext } from 'react';
import { CartContext } from '../../../contexts/cart.context';
import { ReactComponent as ShoppingBagIcon } from '../../../assets/icons/bag-icon.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);

  const toggleCardDropdown = () => setIsOpen(!isOpen);

  return (
   <div className="cart-icon-container" onClick={toggleCardDropdown}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">0</span>
   </div>
  );
}

export default CartIcon;