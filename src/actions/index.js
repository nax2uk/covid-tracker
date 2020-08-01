import baseURL from '../apis/baseURL';

export const fetchLineGraphData = () => async (dispatch) => {
    const response = await baseURL.get('/historical/all?lastdays=120')

    dispatch({
        type: 'FETCH_LINEGRAPH_DATA',
        payload: response,

    })
};