// TODO: Migrate to Redux ToolKit
import { rootReducer } from './root-reducer.redux';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga.saga';

import { 
  compose, 
  legacy_createStore as createStore, 
  applyMiddleware 
} from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Don't need to whitelist `user` b/c comes from Firebase listeners
// Don't need to whitelist `categories` - b/c categories should be fetched from firestore & not persisted iun local storage
// Only track `cart` state to keep orders persistent on refresh or session changes.
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const reduxSagaMiddleware = createSagaMiddleware();

// Define the middlewares that hit before dispatching & only apply in development
const middlewares = [process.env.NODE_ENV !== 'production' && logger, reduxSagaMiddleware].filter(Boolean);


// Swaps between native compose from redux or using redux dev-tools
const composer = 
  (    process.env.NODE_ENV !== 'production' 
    && window 
    && window.__REDUX_DEVTOOLS_EXTENSION_CHROME__ 
  )
  || compose

// Currying to create the ehancer chain
const composedEnhancers = composer(applyMiddleware(...middlewares));

// Hook up store with middlewares
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);

// Attach the saga
reduxSagaMiddleware.run(rootSaga);
