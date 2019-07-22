import { ACCOMMODATION_LISTINGS_RETRIEVED } from '../actions';

const initialState = {
  accommodations: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
  case ACCOMMODATION_LISTINGS_RETRIEVED:
    return Object.assign({}, state, {
      accommodations: action.payload,
    });
  default:
    return state;
  }
};
