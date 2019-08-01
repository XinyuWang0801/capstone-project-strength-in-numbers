import { BOOKED_ACCOMMODATIONS_RETRIEVED, USER_CREATED, USER_LOGIN_SUCCEDED } from '../actions';

const initialState = {
  id: null,
  bookings: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
  case USER_LOGIN_SUCCEDED:
  case USER_CREATED:
    return Object.assign({}, state, {
      id: action.payload,
    });
  case BOOKED_ACCOMMODATIONS_RETRIEVED:
    return Object.assign({}, state, {
      bookings: action.payload,
    });
  default:
    return state;
  }
};
