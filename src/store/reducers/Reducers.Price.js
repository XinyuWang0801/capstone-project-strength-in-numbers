import { PRICE_ADDED } from '../actions';

const initialState = {
  price: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case PRICE_ADDED:
    return Object.assign({}, state, {
      price: action.payload,
    });
  default:
    return state;
  }
};
