import {combineReducers} from 'redux';
import apartmentsListReducer from './apartmentsListReducer';
import apartmentReducer from './apartmentReducer';
import apartmentsGroupedReducer from './apartmentsGroupedReducer'
import locationsListReducer from './locationsListReducer'
import apartmentsFilteredByLocationReducer from './apartmentsFilteredByLocationReducer'


export default combineReducers({
    apartmentsList: apartmentsListReducer,
    apartmentItem: apartmentReducer,
    apartmentsGrouped: apartmentsGroupedReducer,
    locationsList: locationsListReducer,
    apartmentsByLocation: apartmentsFilteredByLocationReducer
})
