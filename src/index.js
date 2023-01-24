import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store.redux';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';
import App from './App';
import './index.styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <UserProvider>
          <CategoriesProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </CategoriesProvider>
        </UserProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
