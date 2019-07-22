import CMS from './Reducers.CMS';
import accommodationFormState from './Reducers.AccommodationForm';
import bedsState from './Reducers.Beds';
import exampleState from './Reducers.Example';
import exploreState from './Reducers.Explore';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  exampleState,
  exploreState,
  bedsState,
  CMS,
  accommodationFormState,
});

export default reducer;
