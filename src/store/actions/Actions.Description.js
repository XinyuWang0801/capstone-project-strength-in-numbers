export const DESCRIPTION_SECTION_DESCRIPTION_ADDED = 'DESCRIPTION_SECTION_DESCRIPTION_ADDED';

export const addDescription = (description) => {
  return (dispatch) => {
    dispatch({ type: DESCRIPTION_SECTION_DESCRIPTION_ADDED, payload: description });
  };
};
