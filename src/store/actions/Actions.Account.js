import * as Services from '../services';

export const USER_CREATED = 'USER_CREATED';
export const BOOKED_ACCOMMODATIONS_RETRIEVED = 'BOOKED_ACCOMMODATIONS_RETRIEVED';

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
