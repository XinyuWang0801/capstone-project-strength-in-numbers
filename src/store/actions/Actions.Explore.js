import * as Services from '../services';

export const ACCOMMODATION_LISTINGS_RETRIEVED = 'ACCOMMODATION_LISTINGS_RETRIEVED';

export const getAccommodationListings = (location) => {
  return async (dispatch) => {
    const listings = await Services.getAccommodationListings(location);
    dispatch({ type: ACCOMMODATION_LISTINGS_RETRIEVED, payload: listings });
  };
};
