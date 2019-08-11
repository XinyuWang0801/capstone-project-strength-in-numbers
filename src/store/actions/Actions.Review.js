export const REVIEW_SECTION_REVIEW_ADDED = 'REVIEW_SECTION_REVIEW_ADDED';

export const addReview = (review) => {
  return (dispatch) => {
    dispatch({ type: REVIEW_SECTION_REVIEW_ADDED, payload: review });
  };
};
