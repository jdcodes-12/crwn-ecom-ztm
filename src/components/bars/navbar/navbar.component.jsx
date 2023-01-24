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
  const { isOpen, setIsOpen } = useContext(CartContext);
  
  return (
    <>
      <NavbarContainer className="navigation">
        <LogoContainer className="logo-container" to="/">
          <Logo className="logo"/>
        </LogoContainer>
        <NavLinks className="nav-links-container">
          <NavLink className="nav-link" to="/shop">SHOP</NavLink>
          <NavLink className="nav-link" to="/checkout">CHECKOUT</NavLink>
          {
            currentUser ?               
              <NavLink as='span' className="nav-link" onClick={signOutUser}>SIGN OUT</NavLink> :
              <NavLink className="nav-link" to="/auth">SIGN IN</NavLink>
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
