import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/bars/navbar/navbar.component';
import HomeRoute from './routes/home/home.route';
import ShopRoute from './routes/shop/shop.route';
import CheckoutRoute from './routes/checkout/checkout.route';
import AuthenticationRoute from './routes/authentication/authentication.route';

function App() {
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
