// TODO: Migrate to Redux ToolKit

import { rootReducer } from './root-reducer.redux';
import { logger } from 'redux-logger';
import { 
  compose, 
  legacy_createStore as createStore, 
  applyMiddleware 
} from 'redux';

// Define the middlewares that hit before dispatching
const middlewares = [logger];
const composedEnhancers = compose(applyMiddleware(...middlewares));

// Hook up store with middlewares
export const store = createStore(rootReducer, undefined, composedEnhancers);