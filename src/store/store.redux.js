// TODO: Migrate to Redux ToolKit
import { rootReducer } from './root-reducer.redux';
import logger from 'redux-logger';
import { 
  compose, 
  legacy_createStore as createStore, 
  applyMiddleware 
} from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Define the middlewares that hit before dispatching & only apply in development
const middlewares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

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