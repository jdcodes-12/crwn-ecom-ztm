import React, { useContext } from 'react';
import { UserContext } from '../../../contexts/user.context';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/logos/crown.svg';
import { signOutUser } from '../../../utils/firebase/auth/auth.util';
import './navbar.styles.scss';


const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

  console.log(currentUser)
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
          {
            currentUser ?               
              <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span> :
              <Link className="nav-link" to="/auth">SIGN IN</Link>
          }
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
