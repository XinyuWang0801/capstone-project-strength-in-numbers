import CMS from './Reducers.CMS';
import accommodationFormState from './Reducers.AccommodationForm';
import bedsState from './Reducers.Beds';
import exampleState from './Reducers.Example';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  exampleState,
  bedsState,
  CMS,
  accommodationFormState,
});

export default reducer;
