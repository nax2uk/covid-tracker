export default (state = "cases", action) => {
    switch (action.type) {
        case 'SET_CASESTYPE':
            return action.payload;
        default:
            return state;
    }
};