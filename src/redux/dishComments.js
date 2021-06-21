import * as ActionTypes from './ActionTypes';

export const RdishComment = (state = { dishComments: [], errMess: null, errMessTwo: null }, action) => {
    switch (action.type) {
        case ActionTypes.DISH_COMMENTS_ADDED:
            return { ...state, dishComments: action.payload, errMess: null, errMessTwo: null }
        case ActionTypes.DISH_COMMENTS_FAILED:
            return { ...state, dishComments: [], errMess: action.payload, errMessTwo: null }
        case ActionTypes.NEW_DISH_COMMENT_SUCCESS:
            const newDishComment = action.payload;
            return { ...state, dishComments: state.dishComments.concat(newDishComment), errMess: null, errMessTwo: null }
        case ActionTypes.NEW_DISH_COMMENT_FAILED:
            return { ...state, dishComments: [], errMess: null, errMessTwo: action.payload }
        default:
            return state
    }
}