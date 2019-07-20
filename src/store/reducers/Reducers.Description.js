import { DESCRIPTION_SECTION_DESCRIPTION_ADDED } from '../actions';

const initialState = {
    description: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DESCRIPTION_SECTION_DESCRIPTION_ADDED:
            return Object.assign({}, state, {
                description: action.payload,
            });
        default:
            return state;
    }
}