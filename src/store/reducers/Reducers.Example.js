// Delete this file later or rename as required
import { ACCOMMODATION_BEDS_ADDED, ACCOMMODATION_NAME_ADDED } from '../actions';

const initialState = {
  Name: '',
  Guests: null,
  price: null,
  Type: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
  case ACCOMMODATION_NAME_ADDED:
    return Object.assign({}, state, {
      Name: action.payload,
    });
  case ACCOMMODATION_BEDS_ADDED:
    return Object.assign({}, state, {
      Guests: action.payload,
    });
  default:
    return state;
  }
};
