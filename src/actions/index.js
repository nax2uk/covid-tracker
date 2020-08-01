import baseURL from '../apis/baseURL';

export const fetchWorldwideInfo = () => async (dispatch) => {
    const response = await baseURL.get('/all')

    dispatch({
        type: 'FETCH_WORLDWIDE_INFO',
        payload: response.data,
    });

};

export const fetchCountryInfo = (countryCode) => async (dispatch) => {
    const response = await baseURL.get(`/countries/${countryCode}`)

    dispatch({
        type: 'FETCH_COUNTRY_INFO',
        payload: { data: response.data, countryCode: countryCode }
    });

};

export const fetchCountries = () => async (dispatch) => {
    const response = await baseURL.get('/countries')

    dispatch({
        type: 'FETCH_COUNTRIES',
        payload: response.data,

    });

}

export const fetchLineGraphData = () => async (dispatch) => {
    const response = await baseURL.get('/historical/all?lastdays=120')

    dispatch({
        type: 'FETCH_LINEGRAPH_DATA',
        payload: response.data,

    });
};
