import React from 'react';
import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../store/user/user.selectors';
import { selectCartIsOpen } from '../../../store/cart/cart.selectors';

import { signOutUser } from '../../../utils/firebase/auth/auth.util';

import { ReactComponent as Logo } from '../../../assets/logos/crown.svg';
import CartIcon from '../../cart/cart-icon/cart-icon.component';
import CartDropdown from '../../cart/cart-dropdown/cart-dropdown.component';
import {
  NavbarContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navbar.styles';


const Navbar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isOpen = useSelector(selectCartIsOpen);
  
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
