import { LOCATION_ADDRESS_ADDED } from '../actions';

const initialState = {
    address: [],
};

export default (state = initialState, action) => {
    switch(action.type) {
    case LOCATION_ADDRESS_ADDED:
        return Object.assign({}, state, {
            address: action.payload,
        });
    default:
        return state;
    }
}