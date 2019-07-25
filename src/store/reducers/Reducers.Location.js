import { LOCATION_ADDRESS_ADDED } from '../actions';

const initialState = {
  location: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
  case LOCATION_ADDRESS_ADDED:
    return Object.assign({}, state, {
      location: action.payload,
    });
  default:
    return state;
  }
};
