export const PRICE_ADDED = 'PRICE_ADDED';

export const addPrice = (price) => {
  return (dispatch) => {
    dispatch({ type: PRICE_ADDED, payload: price });
  };
};
