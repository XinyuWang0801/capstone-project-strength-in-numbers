import CMS from './Reducers.CMS';
import accommodationFormState from './Reducers.AccommodationForm';
import bathroomState from './Reducers.Bathrooms';
import bedsState from './Reducers.Beds';
import descriptionState from './Reducers.Description';
import exampleState from './Reducers.Example';
import locationState from './Reducers.Location';
import priceState from './Reducers.Price';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  exampleState,
  locationState,
  bedsState,
  CMS,
  accommodationFormState,
  descriptionState,
  priceState,
  bathroomState,
});

export default reducer;
