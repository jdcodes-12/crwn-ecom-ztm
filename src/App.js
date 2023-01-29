import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUserDocFromAuth } from './utils/firebase/firestore/firestore.util';
import { onAuthStateChangedListener } from './utils/firebase/auth/auth.util';
import { setCurrentUser } from './store/user/user.actions';

import { getCurrentUser } from './utils/firebase/auth/auth.util';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/bars/navbar/navbar.component';
import HomeRoute from './routes/home/home.route';
import ShopRoute from './routes/shop/shop.route';
import CheckoutRoute from './routes/checkout/checkout.route';
import AuthenticationRoute from './routes/authentication/authentication.route';


function App() {

  // `dispatch`: singleton that dispatches for all reducers in rootReducer
  const dispatch = useDispatch(); 

  useEffect(() => {
    getCurrentUser().then(user => console.log(user));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<HomeRoute/>} />
        <Route path="shop/*" element={<ShopRoute />} />
        <Route path="checkout" element={<CheckoutRoute/>} />
        <Route path="auth" element={<AuthenticationRoute/>} />
      </Route>
    </Routes>
  );
}

export default App;
