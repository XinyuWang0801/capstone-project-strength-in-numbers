import refData from '../../refData.json';

// Reference data
const initialState = {
  ...refData,
};

export default (state = initialState) => {
  return state;
};
