import { DISHES } from '../shared/dishes';
import * as ActionTypes from './ActionTypes';

export const Rdishes = (state = DISHES, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return { dishes: action.payload }
        default:
            return state;
    }
}