import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';

const CheckoutRoute = () => {
  const { 
    cartItems,
    cartTotal,
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
        cartItems.map(item => 
          <CheckoutItem key={item.id} cartItem={item}/>
        )
      }
      <span className="total">Total: ${cartTotal}</span>
    </section>
  );
}

export default CheckoutRoute;