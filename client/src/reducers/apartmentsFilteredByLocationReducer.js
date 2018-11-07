import {FILTER_APARTMENTS_BY_LOCATION} from './../actions/types';

const initialState = {
  apartments: {}
};


export default (state = initialState, action) => {
    switch (action.type) {
        case FILTER_APARTMENTS_BY_LOCATION:
            return {
                ...state,
                apartments: action.payload.apartments
            };
        default:
            return state;
    }
}
