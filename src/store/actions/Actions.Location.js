export const LOCATION_ADDRESS_ADDED = 'LOCATION_ADDRESS_ADDED';

export const addAddress = (userAddress) => {
    return (dispatch, getState) => {
        dispatch({ type: LOCATION_ADDRESS_ADDED, payload: userAddress});
    };
};