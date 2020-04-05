import {createStore, combineReducers} from 'redux';
import {Rdishes} from './dishes';
import {Rchef} from './chef';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishlar: Rdishes,
            chef: Rchef            
        })
    );

    return store;
}