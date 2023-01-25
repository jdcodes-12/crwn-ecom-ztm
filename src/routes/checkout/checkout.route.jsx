import React from 'react';

import { useSelector } from 'react-redux';
import { selectCartTotal, selectCartItems } from '../../store/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutContainer,
  CheckoutHeaders,
  HeaderBlock,
  Total,
} from './checkout.styles.jsx';

const CheckoutRoute = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);  

  return (
    <CheckoutContainer>
      <CheckoutHeaders>
        <HeaderBlock as='h3'>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock as='h3'>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock as='h3'>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock as='h3'>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock as='h3'>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeaders>
      {
        cartItems.map(item => 
          <CheckoutItem key={item.id} cartItem={item}/>
        )
      }
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
}

export default CheckoutRoute;