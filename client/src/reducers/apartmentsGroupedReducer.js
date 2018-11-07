import {FETCH_APARTMENTS_GROUPED_BY_LOCATION} from './../actions/types';

const initialState = {
  locations: {}
};


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_APARTMENTS_GROUPED_BY_LOCATION:
            return {
                ...state,
                locations: action.payload.locations
            };
        default:
            return state;
    }
}
