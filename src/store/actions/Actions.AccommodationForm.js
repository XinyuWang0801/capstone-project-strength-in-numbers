import * as Services from '../services';

export const ACCOMMODATION_FORM_ORDER_UPDATED = 'ACCOMMODATION_FORM_ORDER_UPDATED';
export const ACCOMMODATION_FORM_COMPLETED = 'ACCOMMODATION_FORM_COMPLETED';
export const ACCOMMODATION_FORM_CLEARED = 'ACCOMMODATION_FORM_CLEARED';

const formCompleted = (dispatch, getState) => {
  const { accommodationFormState: { formOrder } } = getState();
  const { nameState, bedsState, bathroomState, locationState, priceState, photosState, descriptionState } = getState();

  const payload = {
    name: nameState.propertyName,
    propertyType: nameState.propertyType,
    bathrooms: bathroomState.bathrooms,
    guests: bedsState.guestNumber,
    roomArrangement: [...bedsState.roomArrangements],
    // id: null,
    location: {
      city: locationState.location.city,
      country: locationState.location.country,
      state: locationState.location.state,
      street: locationState.location.street,
      zipCode: locationState.location.zipCode,
    },
    price: priceState.price,
    description: descriptionState.description,
    photos: photosState.photos.length === 0 ? [null] : photosState.photos,
    bookedDates: [],
    userId: 123, // Change this later when account creation is done
  };

  // Check if there is anything that has not been defined
  if (Object.values(payload).some(item => item === null || item === undefined)) {
    // eslint-disable-next-line no-console
    console.error('undefined values in payload');
    return;
  }

  Services.updateAccommodationModel(payload);

  dispatch({ type: ACCOMMODATION_FORM_ORDER_UPDATED, payload: formOrder.length });
  dispatch({ type: ACCOMMODATION_FORM_COMPLETED });
};


export const sectionCompleted = (name) => {
  return (dispatch, getState) => {
    const { accommodationFormState: { formOrder } } = getState();
    const currentSection = formOrder.findIndex(item => item.name === name);

    if (formOrder.length - 1 === currentSection) {
      // If all sections have been completed;
      formCompleted(dispatch, getState);
      return;
    }

    dispatch({ type: ACCOMMODATION_FORM_ORDER_UPDATED, payload: currentSection + 1 });
  };
};

export const navigateToSection = (name) => {
  return (dispatch, getState) => {
    const { accommodationFormState: { formOrder } } = getState();
    const newSection = formOrder.findIndex(item => item.name === name);

    dispatch({ type: ACCOMMODATION_FORM_ORDER_UPDATED, payload: newSection });
  };
};

export const clearAccommodationForm = () => {
  return (dispatch) => {
    dispatch({ type: ACCOMMODATION_FORM_CLEARED });
  };
};
