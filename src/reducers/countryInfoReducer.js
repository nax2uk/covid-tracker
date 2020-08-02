export default (
    state = {
        country: "worldwide",
        data: {},
        mapZoom: 3,
        mapCenter: [34.80746, -40.4796]
    },
    action) => {

    switch (action.type) {
        case 'FETCH_COUNTRY_INFO':
            return {
                ...state,
                country: action.payload.countryCode,
                data: action.payload.data,
                mapZoom: 5,
                mapCenter: [
                    action.payload.data.countryInfo.lat,
                    action.payload.data.countryInfo.long
                ],
            };

        case 'FETCH_WORLDWIDE_INFO':
            return {
                ...state,
                country: "worldwide",
                data: action.payload,
                mapZoom: 3,
                mapCenter: [34.80746, -40.4796]
            };

        default:
            return state;
    }
};