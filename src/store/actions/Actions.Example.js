// Delete this file later or rename as required
import * as Services from '../services';

export const ACCOMMODATION_BEDS_ADDED = 'ACCOMMODATION_BEDS_ADDED';
export const ACCOMMODATION_MODEL_UPDATED = 'ACCOMMODATION_MODEL_UPDATED';
export const ACCOMMODATION_NAME_ADDED = 'ACCOMMODATION_NAME_ADDED';

export const addAccommodationName = (accommodationName) => {
  return (dispatch) => {
    dispatch({ type: ACCOMMODATION_NAME_ADDED, payload: accommodationName });
  };
};

export const addAccommodationBeds = (beds) => {
  return (dispatch) => {
    dispatch({ type: ACCOMMODATION_BEDS_ADDED, payload: beds });
  };
};

export const updateAccommodationModel = () => {
  return async (dispatch, getState) => {
    const { exampleState } = getState();

    await Services.updateAccommodationModel(exampleState);

    dispatch({ type: ACCOMMODATION_MODEL_UPDATED });
  };
};
