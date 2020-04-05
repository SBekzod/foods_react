import {CHEF} from '../shared/chef';
import * as ActionTypes from './ActionTypes';

export const Rchef = (state=CHEF, action) => {
    switch(action.type){
        case ActionTypes.ADD_SCORE:
            var score = action.payload;
            return state.concat(score);
        default:
            return state;
    }
}