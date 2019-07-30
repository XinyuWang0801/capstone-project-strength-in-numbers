export const NAME_SECTION_COMPLETED = 'NAME_SECTION_COMPLETED';
export const ACCOMMODATION_BEDS_ADDED = 'ACCOMMODATION_BEDS_ADDED';
export const ACCOMMODATION_MODEL_UPDATED = 'ACCOMMODATION_MODEL_UPDATED';
export const ACCOMMODATION_NAME_ADDED = 'ACCOMMODATION_NAME_ADDED';

export const completeNameSection = (info) => {
  return (dispatch) => {
    dispatch({ type: NAME_SECTION_COMPLETED, payload: info });
  };
};

export const addAccommodationName = (accommodationName) => {
  return (dispatch) => {
    dispatch({ type: ACCOMMODATION_NAME_ADDED, payload: accommodationName });
  };
};
