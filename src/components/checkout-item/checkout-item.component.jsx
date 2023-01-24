import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
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
  const { clearCartItem, addProductToCart, decrementProductQuantity } = useContext(CartContext);

  const onClearHandler = () => clearCartItem(cartItem);
  const onDecrementHandler = () => decrementProductQuantity(cartItem);
  const onIncrementHandler = () => addProductToCart(cartItem);

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