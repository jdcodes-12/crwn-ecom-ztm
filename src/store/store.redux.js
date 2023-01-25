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

// Define the middlewares that hit before dispatching
const middlewares = [logger]

// Currying to create the ehancer chain
const composedEnhancers = compose(applyMiddleware(...middlewares));

// Hook up store with middlewares
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);