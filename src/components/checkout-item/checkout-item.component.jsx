import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selectors';
import { 
  addProductToCart, 
  removeProductFromCart, 
  clearProductFromCart
} from '../../store/cart/cart.actions';

import { 
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const onClearHandler = () => 
    dispatch(clearProductFromCart(cartItems, cartItem));

  const onDecrementHandler = () => 
    dispatch(removeProductFromCart(cartItems, cartItem));

  const onIncrementHandler = () => 
    dispatch(addProductToCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={onDecrementHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={onIncrementHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={onClearHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;