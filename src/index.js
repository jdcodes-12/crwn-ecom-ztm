import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxStore } from 'react-redux';
import { store } from './store/store.redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxStore store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxStore>
  </React.StrictMode>
);
