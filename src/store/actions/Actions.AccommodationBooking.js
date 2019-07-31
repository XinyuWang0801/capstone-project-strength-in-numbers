import * as Services from '../services';

export const ACCOMMODATION_BOOKED = 'ACCOMMODATION_BOOKED';

export const bookAccommodation = (dates, guests) => {
  return async (dispatch, getState) => {
    const { exploreState: { accommodationInfo: { id } }, accountState } = getState();

    await Services.bookAccommodation(id, dates, guests);

    const nDates = Services.convertArrayOfDatesToObjects(dates);
    await Services.bookAccommodationForUser(id, accountState.id, nDates);
  
    dispatch({ type: ACCOMMODATION_BOOKED, payload: nDates });
  };
};
