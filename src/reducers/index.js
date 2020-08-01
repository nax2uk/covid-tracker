import { combineReducers } from 'redux';
import lineGraphDataReducer from './lineGraphDataReducer';
import countriesReducer from './countriesReducer';
import countryInfoReducer from './countryInfoReducer';

export default combineReducers({
    lineGraphData: lineGraphDataReducer,
    countryInfo: countryInfoReducer,
    countries: countriesReducer,

});
