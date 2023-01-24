import USER_ACTION_TYPES from './user.types';

const USER_INTIAL_STATE = {
  currentUser: null,
};

// `default` case must return `state`. If an unhandled action occurs,
// the original state object should be returned to avoid re-rendering
// of components. This also will keep batch dispatch actions, from components,
// from being skewed.
export const userReducer = (state = USER_INTIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state, 
        currentUser: payload
      };

    default: 
      return state; 
  }
} 
