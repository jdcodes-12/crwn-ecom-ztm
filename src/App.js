import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { createUserDocFromAuth } from './utils/firebase/firestore/firestore.util';
import { onAuthStateChangedListener } from './utils/firebase/auth/auth.util';

import Navbar from './components/bars/navbar/navbar.component';
import HomeRoute from './routes/home/home.route';
import ShopRoute from './routes/shop/shop.route';
import CheckoutRoute from './routes/checkout/checkout.route';
import AuthenticationRoute from './routes/authentication/authentication.route';
import { setCurrentUser } from './store/user/user.actions';

function App() {

  // `dispatch`: singleton that dispatch even for all reducers in rootReducer
  const dispatch = useDispatch(); 

  useEffect(() => {
    onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    })
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
