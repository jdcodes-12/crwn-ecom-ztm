import React, { useContext } from 'react';
import { UserContext } from '../../../contexts/user.context';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/logos/crown.svg';
import { signOutUser } from '../../../utils/firebase/auth/auth.util';
import CartIcon from '../../cart/cart-icon/cart-icon.component';
import CardDropdown from '../../cart/cart-dropdown/cart-dropdown.component';
import './navbar.styles.scss';


const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  
  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">SHOP</Link>
          {
            currentUser ?               
              <span className="nav-link" onClick={signOutUser}>SIGN OUT</span> :
              <Link className="nav-link" to="/auth">SIGN IN</Link>
          }
          <CartIcon />
        </div>
        <CardDropdown />
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
