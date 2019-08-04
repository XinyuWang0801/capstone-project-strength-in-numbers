import CMS from '../../CMS.json';
import { CMS_CONTENT_RETRIEVED } from '../actions';

// Content Management System
const initialState = {
  ...CMS,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case CMS_CONTENT_RETRIEVED:
    return Object.assign({}, state, {
      ...action.payload,
    });
  default:
    return state;
  }
};
