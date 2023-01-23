import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearCartItem, addProductToCart, decrementProductQuantity } = useContext(CartContext);

  const onClearHandler = () => clearCartItem(cartItem);
  const onDecrementHandler = () => decrementProductQuantity(cartItem);
  const onIncrementHandler = () => addProductToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={onDecrementHandler}>&#10094;</span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={onIncrementHandler}>&#10095;</span>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={onClearHandler}>&#10005;</div>
    </div>
  );
}

export default CheckoutItem;