import { REVIEW_SECTION_REVIEW_ADDED } from '../actions';

const initialState = {
  review: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
  case REVIEW_SECTION_REVIEW_ADDED:
    return Object.assign({}, state, {
      review: action.payload,
    });
  default:
    return state;
  }
};
