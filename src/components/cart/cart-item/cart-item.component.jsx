import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
   <article className='cart-item-container'>
    <img src={imageUrl} alt={`${name}`} />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} X {price}
      </span>
    </div>
   </article>
  );
}

export default CartItem;