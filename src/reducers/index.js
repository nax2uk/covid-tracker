import { combineReducers } from 'redux';
import lineGraphDataReducer from './lineGraphDataReducer';

export default combineReducers({
    lineGraphData: lineGraphDataReducer
});
