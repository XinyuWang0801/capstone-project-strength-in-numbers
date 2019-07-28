import * as Services from '../services';

export const ACCOMMODATION_BOOKED = 'ACCOMMODATION_BOOKED';

export const bookAccommodation = (dates, guests) => {
  return async (dispatch, getState) => {
    const { exploreState: { accommodationInfo: { id } } } = getState();

    await Services.bookAccommodation(id, dates, guests);
    dispatch({ type: ACCOMMODATION_BOOKED });
  };
};
