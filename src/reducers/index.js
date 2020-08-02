import { combineReducers } from 'redux';
import lineGraphDataReducer from './lineGraphDataReducer';
import countriesReducer from './countriesReducer';
import countryInfoReducer from './countryInfoReducer';
import casesTypeReducer from './casesTypeReducer';

export default combineReducers({
    lineGraphData: lineGraphDataReducer,
    countryInfo: countryInfoReducer,
    countries: countriesReducer,
    casesType: casesTypeReducer,

});
