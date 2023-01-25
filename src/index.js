import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider as ReduxStore } from 'react-redux';
import { store, persistor } from './store/store.redux';
import { PersistGate } from 'redux-persist/integration/react';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxStore store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </ReduxStore>
  </React.StrictMode>
);
