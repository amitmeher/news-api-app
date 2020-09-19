import { combineReducers } from 'redux';
import queriesReducers from './Queries';
import articleReducers from './Atricles';

const reducers = combineReducers({
    queries: queriesReducers,
    article: articleReducers
});

export default reducers;