import { PHOTO_SECTION_COMPLETED } from '../actions';

const initialState = {
  photos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
  case PHOTO_SECTION_COMPLETED:
    return Object.assign({}, state, {
      photos: [...action.payload],
    });
  default:
    return state;
  }
};
