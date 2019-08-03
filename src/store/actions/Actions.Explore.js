import * as Services from '../services';

export const ACCOMMODATION_LISTINGS_RETRIEVED = 'ACCOMMODATION_LISTINGS_RETRIEVED';
export const ACCOMMODATION_INFO_RETRIEVED = 'ACCOMMODATION_INFO_RETRIEVED';
export const ACCOMMODATION_SEARCH_LOCATION_UPDATED = 'ACCOMMODATION_SEARCH_LOCATION_UPDATED';
export const ACCOMMODATION_LISTINGS_FILTERED = 'ACCOMMODATION_LISTINGS_FILTERED';
export const ACCOMMODATION_GUEST_NUMBERS_UPDATED = 'ACCOMMODATION_GUEST_NUMBERS_UPDATED';

export const getAccommodationListings = (location, checkIn, guestNumber, fullLocation) => {
  return async (dispatch) => {
    const listings = await Services.getAccommodationListings(location);

    const filterListingsByDates = listings.filter(listing => !Object.values(listing.bookedDates).includes(checkIn));
    const filterListingsByGuestNumber = filterListingsByDates.filter(listing => Number(listing.guests) >= guestNumber);

    dispatch({ type: ACCOMMODATION_LISTINGS_RETRIEVED, payload: filterListingsByGuestNumber });
    dispatch({ type: ACCOMMODATION_SEARCH_LOCATION_UPDATED, payload: { ...location, fullLocation } });
    dispatch({ type: ACCOMMODATION_GUEST_NUMBERS_UPDATED, payload: guestNumber });
  };
};

export const showAccommodationInfo = (id) => {
  return async (dispatch, getState) => {
    const { accommodations } = getState().exploreState;
    const accommodationInfo = accommodations.filter(item => item.id === id)[0];
    dispatch({ type: ACCOMMODATION_INFO_RETRIEVED, payload: accommodationInfo });
  };
};

export const filterAccommodationsByMaxPrice = (price) => {
  return (dispatch, getState) => {
    const { accommodationsInitial } = getState().exploreState;

    const filteredAccommodations = accommodationsInitial.filter(accommodation => Number(accommodation.price) <= price);

    dispatch({ type: ACCOMMODATION_LISTINGS_FILTERED, payload: filteredAccommodations });
  };
};

export const filterAccommodationsByMinPrice = (price) => {
  return (dispatch, getState) => {
    const { accommodationsInitial } = getState().exploreState;

    const filteredAccommodations = accommodationsInitial.filter(accommodation => Number(accommodation.price) >= price);

    dispatch({ type: ACCOMMODATION_LISTINGS_FILTERED, payload: filteredAccommodations });
  };
};

export const filterAccommodationsByBathroomNum = (bathroomNum) => {
  return (dispatch, getState) => {
    const { accommodationsInitial } = getState().exploreState;

    const filteredAccommodations = accommodationsInitial.filter(accommodation => Number(accommodation.bathrooms) >= bathroomNum);

    dispatch({ type: ACCOMMODATION_LISTINGS_FILTERED, payload: filteredAccommodations });
  };
};

export const filterAccommodationsByType = (accommodationType) => {
  return (dispatch, getState) => {
    const { accommodationsInitial } = getState().exploreState;

    const filteredAccommodations = accommodationsInitial.filter(accommodation => accommodation.propertyType === accommodationType);

    dispatch({ type: ACCOMMODATION_LISTINGS_FILTERED, payload: filteredAccommodations });
  };
};
