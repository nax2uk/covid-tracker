import { sortData } from '../utils';

export default (
    state = {
        nameAndValue: [],
        data: [],
    },

    action) => {
    switch (action.type) {
        case 'FETCH_COUNTRIES':
            return {
                ...state,
                nameAndValue: action.payload.map(item => ({
                    name: item.country,
                    value: item.countryInfo.iso2,
                })),
                data: sortData(action.payload)
            }
        default:
            return state;
    }
};