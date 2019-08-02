import { ACCOMMODATION_BOOKED, ACCOMMODATION_INFO_RETRIEVED, ACCOMMODATION_LISTINGS_RETRIEVED, ACCOMMODATION_SEARCH_LOCATION_UPDATED } from '../actions';

const initialState = {
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
  searchLocation: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
  case ACCOMMODATION_LISTINGS_RETRIEVED:
    return Object.assign({}, state, {
      accommodations: action.payload,
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
  default:
    return state;
  }
};
