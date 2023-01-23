import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';

const CheckoutRoute = () => {
  const { 
    cartItems, 
    addProductToCart,
    decrementProductQuantity,
  } = useContext(CartContext);

  return (
    <section className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(item => {
          const { id, name, quantity } = item;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <span onClick={() => addProductToCart(item)}>increment</span>
              <span onClick={() => decrementProductQuantity(item)}>decrement</span>
            </div>
          );
        })
      }
      <span className="total">Total: 0</span>
    </section>
  );
}

export default CheckoutRoute;