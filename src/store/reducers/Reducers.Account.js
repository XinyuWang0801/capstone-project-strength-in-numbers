import { USER_CREATED } from '../actions';

const initialState = {
  id: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case USER_CREATED:
    return Object.assign({}, state, {
      id: action.payload,
    });
  default:
    return state;
  }
};
