import * as ActionTypes from './ActionTypes';
import { act } from 'react-dom/test-utils';

export const Rcomments = (state = { comments: null, errMess: null, errMess2: null }, action) => {
    switch (action.type) {
        case ActionTypes.COMMENTS_ADDED:
            return { ...state, comments: action.payload, errMess: null, errMess2: null }
        case ActionTypes.COMMENTS_FAILED:
            return { ...state, comments: null, errMess: action.payload, errMess2: null }
        case ActionTypes.ADD_COMMENT:
            const newComment = action.payload;
            return { ...state, comments: state.comments.concat(newComment), errMess: null, errMess2: null }
        case ActionTypes.ADD_COMMENT_FAILED:
            return { ...state, comments: null, errMess: null, errMess2: action.payload }
        default:
            return state;
    }
};