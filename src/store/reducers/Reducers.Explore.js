import {
  ACCOMMODATION_BOOKED, ACCOMMODATION_GUEST_NUMBERS_UPDATED, ACCOMMODATION_INFO_RETRIEVED,
  ACCOMMODATION_LISTINGS_FILTERED, ACCOMMODATION_LISTINGS_RETRIEVED, ACCOMMODATION_SEARCH_LOCATION_UPDATED,
} from '../actions';

const initialState = {
  accommodationsInitial: [],
  accommodations: [],
  accommodationInfo: {
    id: '',
    beds: '',
    bathrooms: '',
    location: {},
    name: '',
    price: '',
    bookedDates: {},
  },
  searchLocation: {
    city: '',
    administrativeRegion: '',
    country: '',
    fullLocation: '',
  },
  dates: {},
  guestNumber: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case ACCOMMODATION_LISTINGS_RETRIEVED:
    return Object.assign({}, state, {
      accommodations: action.payload,
      accommodationsInitial: action.payload,
    });
  case ACCOMMODATION_INFO_RETRIEVED:
    return Object.assign({}, state, {
      accommodationInfo: action.payload,
    });
  case ACCOMMODATION_BOOKED:
    return Object.assign({}, state, {
      accommodationInfo: {
        ...state.accommodationInfo,
        bookedDates: { ...state.accommodationInfo.bookedDates, ...action.payload },
      },
    });
  case ACCOMMODATION_SEARCH_LOCATION_UPDATED:
    return Object.assign({}, state, {
      searchLocation: action.payload,
    });
  case ACCOMMODATION_LISTINGS_FILTERED:
    return Object.assign({}, state, {
      accommodations: action.payload,
    });
  case ACCOMMODATION_GUEST_NUMBERS_UPDATED:
    return Object.assign({}, state, {
      guestNumber: action.payload,
    });
  default:
    return state;
  }
};
