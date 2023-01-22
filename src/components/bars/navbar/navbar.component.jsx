import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/logos/crown.svg';
import './navbar.styles.scss';


const Navbar = () => {
  return (
    <>
      <nav className="navigation">
        <Link className='logo-container' to="/">
          <Logo className='logo'/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">SHOP</Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/auth">SIGN IN</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
