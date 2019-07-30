export const BED_SECTION_BED_ADDED = 'BED_SECTION_BED_ADDED';
export const BED_SECTION_BED_REMOVED = 'BED_SECTION_BED_REMOVED';
export const BED_SECTION_ROOM_ADDED = 'BED_SECTION_ROOM_ADDED';
export const BED_SECTION_OPTIONS_RESETTED = 'BED_SECTION_OPTIONS_RESETTED';
export const BED_SECTION_ROOM_LISTING_REMOVED = 'BED_SECTION_ROOM_LISTING_REMOVED';
export const BED_SECTION_ROOM_LISTING_UPDATED = 'BED_SECTION_ROOM_LISTING_UPDATED';
export const BED_SECTION_OPTIONS_UPDATED = 'BED_SECTION_OPTIONS_UPDATED';
export const BED_SECTION_GUEST_NUMBER_ADDED = 'BED_SECTION_GUEST_NUMBER_ADDED';

export const addGuestNumber = (guestNumber) => {
  return (dispatch) => {
    dispatch({ type: BED_SECTION_GUEST_NUMBER_ADDED, payload: guestNumber });
  };
};

export const addBed = (bedType) => {
  return (dispatch, getState) => {
    dispatch({ type: BED_SECTION_BED_ADDED });

    const { bedsState: { bedOptions } } = getState();

    const newBedOptions = bedOptions.filter(item => item !== bedType).sort();

    dispatch({ type: BED_SECTION_OPTIONS_UPDATED, payload: newBedOptions });
  };
};

export const removeBed = (bedType) => {
  return (dispatch, getState) => {
    dispatch({ type: BED_SECTION_BED_REMOVED });

    const { bedsState: { bedOptions } } = getState();

    const newBedOptions = [...bedOptions, bedType].sort();
    dispatch({ type: BED_SECTION_OPTIONS_UPDATED, payload: newBedOptions });
  };
};

export const addRoom = (bedsBeingAdded) => {
  return (dispatch, getState) => {
    dispatch({ type: BED_SECTION_ROOM_ADDED });

    const { bedsState: { roomArrangementsComp, roomArrangements } } = getState();
    const newRoomArrangementsComp = [...roomArrangementsComp, bedsBeingAdded];
    const nBedsBeingAdded = bedsBeingAdded.map(item => ({ bedType: item.props.bedType, numberOfBeds: item.props.numberOfBeds }));
    const newRoomArrangements = [...roomArrangements, nBedsBeingAdded];

    dispatch({ type: BED_SECTION_ROOM_LISTING_UPDATED, payload: { newRoomArrangementsComp, newRoomArrangements } });
  };
};

export const resetOptions = () => {
  return (dispatch) => {
    dispatch({ type: BED_SECTION_OPTIONS_RESETTED });
  };
};

export const deleteRoomListing = (roomNumber) => {
  return async (dispatch, getState) => {
    const { bedsState: { roomArrangementsComp, roomArrangements } } = getState();

    const newRoomArrangementsComp = [...roomArrangementsComp];
    const newRoomArrangements = [...roomArrangements];
    newRoomArrangementsComp.splice(roomNumber, 1);
    newRoomArrangements.splice(roomNumber, 1);

    dispatch({ type: BED_SECTION_ROOM_LISTING_UPDATED, payload: { newRoomArrangementsComp, newRoomArrangements } });
  };
};
