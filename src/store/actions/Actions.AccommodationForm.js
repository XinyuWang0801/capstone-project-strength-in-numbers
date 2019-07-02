export const ACCOMMODATION_FORM_ORDER_UPDATED = 'ACCOMMODATION_FORM_ORDER_UPDATED';

export const sectionCompleted = (name) => {
  return (dispatch, getState) => {
    const { accommodationFormState: { formOrder } } = getState(); 
    const currentSection = formOrder.findIndex(item => item.name === name);

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
