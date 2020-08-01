import { combineReducers } from 'redux';
import lineGraphDataReducer from './lineGraphDataReducer';
import countriesReducer from './countriesReducer';
import countryReducer from './countryReducer';
import countryInfoReducer from './countryInfoReducer';

export default combineReducers({
    lineGraphData: lineGraphDataReducer,
    country: countryReducer,
    countries: countriesReducer,
    countryInfo: countryInfoReducer
});
