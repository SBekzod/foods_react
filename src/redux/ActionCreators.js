import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { DISHES } from '../shared/dishes';

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading());

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) return response;
            else {
                throw new Error('This is Error ' + response.status);
            }
        }, error => {
            throw error;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)))
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const dishesFailed = (errMess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMess
});

export const loginUser = (user) => (dispatch) => {
    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
        .then(response => {
            if (response.ok) return response
            else {
                throw new Error('Login is not fullfilled ' + response.status);
            }
        }, error => {
            throw new Error('Login is not fullfilled ' + error.message);
        })
        .then(response => response.json())
        .then(response => {
            if (response.success) {
                //Successful login
                localStorage.setItem('token', response.token);
                dispatch(loginSuccess(user));
            } else {
                throw new Error('Error in logging information ' + response.status);
            }
        })
        .catch(error => {
            dispatch(loginFailed(error.message))
        })
}

export const loginFailed = (errMess) => ({
    type: ActionTypes.LOGIN_FAILED,
    payload: errMess
});

export const loginSuccess = (user) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload: user
});

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch(logoutSuccess());
}

export const logoutSuccess = () => ({
    type: ActionTypes.LOGOUT_SUCCESS
});

export const userSignUp = (newUser) => (dispatch) => {
    return fetch(baseUrl + 'users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
    })
        .then(response => {
            if (response.ok) return response;
            else {
                throw new Error('This login has been used, eroor ' + response.status);
            }
        }, error => {
            throw error;
        })
        .catch(error => {
            dispatch(signupFailure(error.message));
        })
}

export const signupFailure = (errMessTwo) => ({
    type: ActionTypes.SIGNUP_FAILURE,
    payload: errMessTwo
});

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) return response;
            else {
                throw new Error('Error raised ' + response.status)
            }
        }, error => {
            throw error;
        })
        .then(response => response.json())
        .then(comments => {
            dispatch(addComments(comments));
        })
        .catch(error => {
            dispatch(commentsFailed(error.message));
        });
}

export const addComments = (comments) => ({
    type: ActionTypes.COMMENTS_ADDED,
    payload: comments
});

export const commentsFailed = (errMess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

// export const addNewComment = (newcom) => (dispatch) => {
//     return fetch(baseUrl + 'comments', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newcom)
//     })
//         .then(response => {
//             if (response.ok) return response;
//             else {
//                 throw new Error('Error occured ' + response.status);
//             }
//         }, error => {
//             throw error;
//         })
//         .then(response => response.json())
//         .then(comment => {
//             dispatch(showNewComment(comment));
//         })
//         .catch(error => {
//             dispatch(addingCommentFailed(error.message));
//         })
// }

// export const showNewComment = (newcom) => ({
//     type: ActionTypes.ADD_COMMENT,
//     payload: newcom
// });

// export const addingCommentFailed = (errMess) => ({
//     type: ActionTypes.ADD_COMMENT_FAILED,
//     payload: errMess
// });

export const addNewComment = (newcom) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: newcom
});

export const fetchDishComments = () => (dispatch) => {
    return fetch(baseUrl + 'dishcomments')
        .then(response => {
            if (response.ok) return response;
            else {
                throw new Error('Error occured ' + response.status)
            }
        }, error => {
            throw error;
        })
        .then(response => response.json())
        .then(dishComments => {
            dispatch(addDishCommentsSucces(dishComments))
        })
        .catch(error => {
            dispatch(addDishCommentsFailed(error.message))
        });
}

export const addDishCommentsSucces = (dishComments) => ({
    type: ActionTypes.DISH_COMMENTS_ADDED,
    payload: dishComments
});

export const addDishCommentsFailed = (errMess) => ({
    type: ActionTypes.DISH_COMMENTS_FAILED,
    payload: errMess
});

export const addNewDishComment = (newDishCom) => (dispatch) => {
    return fetch(baseUrl + 'dishcomments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newDishCom)
    })
        .then(response => {
            if (response.ok) return response;
            else {
                throw new Error('Error occured ' + response.status);
            }
        }, error => {
            throw error;
        })
        .then(response => response.json())
        .then(newDishComment => {
            dispatch(showNewDishComment(newDishComment));
        })
        .catch(error => {
            dispatch(newDishCommentFailed(error.message));
        });
}

export const showNewDishComment = (newDishComment) => ({
    type: ActionTypes.NEW_DISH_COMMENT_SUCCESS,
    payload: newDishComment
});

export const newDishCommentFailed = (errMess) => ({
    type: ActionTypes.NEW_DISH_COMMENT_FAILED,
    payload: errMess
});


