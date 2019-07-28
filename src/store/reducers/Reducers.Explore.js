import { ACCOMMODATION_INFO_RETRIEVED, ACCOMMODATION_LISTINGS_RETRIEVED } from '../actions';

const initialState = {
  accommodations: [],
  accommodationInfo: {
    id: '',
    beds: '',
    bathrooms: '',
    location: {},
    name: '',
    price: '',
    bookedDates: [],
  },
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
  case 'ACCOMMODATION_DATE_BOOKED':
    return Object.assign({}, state, {
      accommodationInfo: {
        ...state.accommodationInfo,
        id: action.payload,
      },
    });
  case 'ACCOMMODATION_ADD_DATES':
    return Object.assign({}, state, {
      accommodationInfo: {
        ...state.accommodationInfo,
        bookedDates: action.payload,
      },
    });
  default:
    return state;
  }
};
