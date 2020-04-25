import * as ActionTypes from './ActionTypes';


export const Ruser = (state = { isAuthenticated: false, user: null, errMess: null, errMessTwo: null }, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_FAILED:
            return { ...state, isAuthenticated: false, user: null, errMess: action.payload, errMessTwo: null }
        case ActionTypes.LOGIN_SUCCESS:
            return { ...state, isAuthenticated: true, user: action.payload, errMess: null, errMessTwo: null }
        case ActionTypes.LOGOUT_SUCCESS:
            return { ...state, isAuthenticated: false, user: null, errMess: null, errMessTwo: null }
        case ActionTypes.SIGNUP_FAILURE:
            return { ...state, isAuthenticated: false, user: null, errMess: null, errMessTwo: action.payload }
        default:
            return state;
    }

}