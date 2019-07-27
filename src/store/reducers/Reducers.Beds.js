import {
  BED_SECTION_GUEST_NUMBER_ADDED,
  BED_SECTION_OPTIONS_RESETTED,
  BED_SECTION_OPTIONS_UPDATED,
  BED_SECTION_ROOM_LISTING_UPDATED,
} from '../actions';

const SINGLE_BED = 'Single Bed';
const DOUBLE_BED = 'Double Bed';
const QUEEN_BED = 'Queen Bed';
const KING_BED = 'King Bed';

const defaultOptions = [SINGLE_BED, DOUBLE_BED, QUEEN_BED, KING_BED].sort();

const initialState = {
  bedOptions: defaultOptions,
  guestNumber: null,
  roomArrangementsComp: [], // contains the components
  roomArrangements: [], // contains the data to be sent
};

export default (state = initialState, action) => {
  switch (action.type) {
  case BED_SECTION_OPTIONS_RESETTED:
    return Object.assign({}, state, {
      bedOptions: defaultOptions,
    });
  case BED_SECTION_OPTIONS_UPDATED:
    return Object.assign({}, state, {
      bedOptions: action.payload,
    });
  case BED_SECTION_ROOM_LISTING_UPDATED:
    return (Object.assign({}, state, {
      roomArrangementsComp: action.payload.newRoomArrangementsComp,
      roomArrangements: action.payload.newRoomArrangements,
    }));
  case BED_SECTION_GUEST_NUMBER_ADDED:
    return Object.assign({}, state, {
      guestNumber: action.payload,
    });
  default:
    return state;
  }
};
