import React, { useContext } from 'react';
import { UserContext } from '../../../contexts/user.context';
import { CartContext } from '../../../contexts/cart.context';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/logos/crown.svg';
import { signOutUser } from '../../../utils/firebase/auth/auth.util';
import CartIcon from '../../cart/cart-icon/cart-icon.component';
import CartDropdown from '../../cart/cart-dropdown/cart-dropdown.component';
import {
  NavbarContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navbar.styles';


const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpen } = useContext(CartContext);
  
  return (
    <>
      <NavbarContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <NavLinks >
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/checkout">CHECKOUT</NavLink>
          {
            currentUser ?               
              <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink> :
              <NavLink to="/auth">SIGN IN</NavLink>
          }
          <CartIcon />
        </NavLinks>
        { isOpen && <CartDropdown />}
      </NavbarContainer>
      <Outlet />
    </>
  );
};

export default Navbar;
