export const LOCATION_ADDRESS_ADDED = 'LOCATION_ADDRESS_ADDED';

export const addAddress = (location) => {
  return (dispatch) => {
    dispatch({ type: LOCATION_ADDRESS_ADDED, payload: location });
  };
};
