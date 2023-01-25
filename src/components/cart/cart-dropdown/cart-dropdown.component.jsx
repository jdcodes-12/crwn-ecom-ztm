import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../store/cart/cart.selectors';

import Button from '../../buttons/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckout = () => navigate('/checkout');

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ?  
              cartItems.map(item => (
                <CartItem key={item.id} cartItem={item} />
              ))
            : 
              <EmptyMessage>Your cart is empty.</EmptyMessage>
        }
      </CartItems>
      <Button onClick={goToCheckout}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;