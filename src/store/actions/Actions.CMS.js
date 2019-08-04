import * as Services from '../services';

export const CMS_CONTENT_RETRIEVED = 'CMS_CONTENT_RETRIEVED';

export const getCMSContent = () => {
  return async (dispatch) => {
    const CMS = await Services.getCMSContent();
    dispatch({ type: CMS_CONTENT_RETRIEVED, payload: CMS });
  };
};
