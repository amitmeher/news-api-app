import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const saveToLocalStorage = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (error) {
        console.error(error?.message);
    }
}

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (!serializedState) return undefined;
        return JSON.parse(serializedState);
    } catch (error) {
        console.error(error.message);
        return undefined;
    }
}

const initialState = {
    queries: { page: 1, pageSize: 10, q: 'tech' },
    article: {
        loading: false,
        articleDetails: {},
        error: ''
    }
};

const persistedState = loadFromLocalStorage();
console.log({ persistedState });
const middleware = [thunk];

const store = createStore(reducers, persistedState || initialState, applyMiddleware(...middleware));

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;