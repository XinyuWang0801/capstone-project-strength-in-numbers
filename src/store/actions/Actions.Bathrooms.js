export const BATHROOM_NUMBERS_ADDED = 'BATHROOM_NUMBERS_ADDED';

export const addBathroom = (bathrooms) => {
  return (dispatch) => {
    dispatch({ type: BATHROOM_NUMBERS_ADDED, payload: bathrooms });
  };
};
