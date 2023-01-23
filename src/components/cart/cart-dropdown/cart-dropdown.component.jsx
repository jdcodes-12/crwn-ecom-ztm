import React, { useContext } from 'react';
import { CartContext } from '../../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import Button from '../../buttons/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => navigate('/checkout');
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {
          cartItems.length ?  
              cartItems.map(item => (
                <CartItem key={item.id} cartItem={item} />
              ))
            : 
              <span className="empty-message">Your cart is empty.</span>
        }
      </div>
      <Button onClick={goToCheckout}>Checkout</Button>
    </div>
  );
}

export default CartDropdown;