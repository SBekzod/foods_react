import {createStore, combineReducers} from 'redux';
import {Rdishes} from './dishes';
import {Rchef} from './chef';
import {Rcomments} from './comments';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishlar: Rdishes,
            chef: Rchef,
            comments: Rcomments           
        })
    );

    return store;
}