import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Rdishes } from './dishes';
import { Rcomments } from './comments';
import { Ruser } from './auth';
import { RdishComment } from './dishComments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishlar: Rdishes,
            comments: Rcomments,
            auth: Ruser,
            dishComments: RdishComment
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}