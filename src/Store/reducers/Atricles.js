const FETCH_ARTICLES_REQUEST = 'FETCH_ARTICLES_REQUEST';
const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
const FETCH_ARTICLES_FALIURE = 'FETCH_ARTICLES_FALIURE';

const API_URL = 'http://newsapi.org/v2/everything?apiKey=008c2c412a2b403698bc29a732374513&';

const fetchArticlesRequest = () => ({ type: FETCH_ARTICLES_REQUEST });

const fetchArticlesSuccess = articleDetails => ({ type: FETCH_ARTICLES_SUCCESS, payLoad: articleDetails });

const fetchArticlesFaliure = error => ({ type: FETCH_ARTICLES_FALIURE, payLoad: error });

export const fetchAtricles = queries => {
    return (dispatch) => {
        dispatch(fetchArticlesRequest());
        fetch(`${API_URL}${new URLSearchParams({ ...queries })}`)
            .then(response => response.json())
            .then(data => {
                const { articles, totalResults } = data;
                const pageCount = Math.ceil(totalResults / 10);
                dispatch(fetchArticlesSuccess({ articles, pageCount: pageCount > 10 ? 10 : pageCount }));
            })
            .catch(error => dispatch(fetchArticlesFaliure(error?.message)));
    }
}

const articleReducers = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ARTICLES_REQUEST:
            return { ...state, loading: true };
        case FETCH_ARTICLES_SUCCESS:
            return { loading: false, articleDetails: action.payLoad, error: '' };
        case FETCH_ARTICLES_FALIURE:
            return { loading: false, articleDetails: {}, error: action.payLoad };
        default:
            return state;
    }

}

export default articleReducers;