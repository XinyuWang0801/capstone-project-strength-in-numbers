import CMS from './Reducers.CMS';
import accommodationFormState from './Reducers.AccommodationForm';
import bedsState from './Reducers.Beds';
import exampleState from './Reducers.Example';
import descriptionState from './Reducers.Description';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  exampleState,
  bedsState,
  CMS,
  accommodationFormState,
  descriptionState,
});

export default reducer;
