import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';

const CheckoutRoute = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <section>
      {
        cartItems.map(item => {
          const { id, name, quantity } = item;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
            </div>
          );
        })
      }
    </section>
  );
}

export default CheckoutRoute;