import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Rdishes} from './dishes';
import {Rcomments} from './comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishlar: Rdishes,
            comments: Rcomments           
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}