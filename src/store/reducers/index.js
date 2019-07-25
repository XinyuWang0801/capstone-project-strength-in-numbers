import CMS from './Reducers.CMS';
import accommodationFormState from './Reducers.AccommodationForm';
import bedsState from './Reducers.Beds';
import exampleState from './Reducers.Example';
import locationState from './Reducers.Location';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  exampleState,
  locationState,
  bedsState,
  CMS,
  accommodationFormState,
});

export default reducer;
