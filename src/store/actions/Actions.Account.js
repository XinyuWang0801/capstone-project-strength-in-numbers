import * as Services from '../services';

export const USER_CREATED = 'USER_CREATED';
export const BOOKED_ACCOMMODATIONS_RETRIEVED = 'BOOKED_ACCOMMODATIONS_RETRIEVED';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const USER_LOGIN_SUCCEDED = 'USER_LOGIN_SUCCEDED';

export const createUser = (user) => {
  return async (dispatch) => {
    const id = await Services.createUser(user);
    dispatch({ type: USER_CREATED, payload: id });
  };
};

export const getBookedAccommodations = () => {
  return async (dispatch, getState) => {
    const { accountState: { id } } = getState();

    const bookingIds = await Services.getBookedAccommodationsIds(id);
    const accommodations = await Services.getBookedAccommodationDetails(bookingIds);

    dispatch({ type: BOOKED_ACCOMMODATIONS_RETRIEVED, payload: accommodations });
  };
};

export const verifyUser = (user) => {
  return async (dispatch) => {
    const res = await Services.verifyUser(user);
    if (res) {
      dispatch({ type: USER_LOGIN_SUCCEDED, payload: res });
      return true;
    }
    dispatch({ type: USER_LOGIN_FAILED });
    return false;
  };
};
