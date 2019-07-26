import { NAME_SECTION_COMPLETED } from '../actions';

const initialState = {
  propertyType: null,
  spaceType: null,
  propertyName: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case NAME_SECTION_COMPLETED:
    return Object.assign({}, state, {
      ...action.payload,
    });
  default:
    return state;
  }
};
