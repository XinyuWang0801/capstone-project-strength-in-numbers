import { BATHROOM_NUMBERS_ADDED } from '../actions';

const initialState = {
  bathrooms: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case BATHROOM_NUMBERS_ADDED:
    return Object.assign({}, state, {
      bathrooms: action.payload,
    });
  default:
    return state;
  }
};
