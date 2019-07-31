import * as Services from '../services';

export const ACCOMMODATION_LISTINGS_RETRIEVED = 'ACCOMMODATION_LISTINGS_RETRIEVED';
export const ACCOMMODATION_INFO_RETRIEVED = 'ACCOMMODATION_INFO_RETRIEVED';
export const ACCOMMODATION_SEARCH_LOCATION_UPDATED = 'ACCOMMODATION_SEARCH_LOCATION_UPDATED';

export const getAccommodationListings = (location) => {
  return async (dispatch) => {
    const listings = await Services.getAccommodationListings(location);
    dispatch({ type: ACCOMMODATION_LISTINGS_RETRIEVED, payload: listings });
  };
};

export const showAccommodationInfo = (id) => {
  return async (dispatch, getState) => {
    const { accommodations } = getState().exploreState;
    const accommodationInfo = accommodations.filter(item => item.id === id)[0];
    dispatch({ type: ACCOMMODATION_INFO_RETRIEVED, payload: accommodationInfo });
  };
};

export const updateSearchLocation = (location) => {
  return (dispatch) => {
    dispatch({ type: ACCOMMODATION_SEARCH_LOCATION_UPDATED, payload: location });
  };
};
