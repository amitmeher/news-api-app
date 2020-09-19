const SET_QUERIES = 'SET_QUERY';

export const setQueries = id => ({ type: SET_QUERIES, payLoad: id });

const queriesReducers = (state = {}, action) => {
    switch (action.type) {
        case SET_QUERIES:
            return { ...state, ...action.payLoad };
        default:
            return state;
    }
}

export default queriesReducers;