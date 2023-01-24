const CART_ACTION_TYPES = {
  TOGGLE_OPEN: 'TOGGLE_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
};

const CART_INITIAL_STATE = {
  cartCount: 0,
  cartTotal: 0,
  cartItems: [],
  isOpen: false,
};

const cartReducer = (state = CART_INITIAL_STATE, action) => {
  const { type, payload } = action;
  
  switch(type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    case CART_ACTION_TYPES.TOGGLE_OPEN:
      return {
        ...state,
        isOpen: payload,
      };

    default: 
      return state;
  }
};

