import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const addScore = (mark) => ({
    type: ActionTypes.ADD_SCORE,
    payload: mark
});

export const addDishes = (dishes) => ({
   type: ActionTypes.ADD_DISHES,
   payload: dishes
});

export const fetchDishes = () => (dispatch) => {
    return fetch(baseUrl + 'dishes')
        .then(response => response.json)
        .then(dishes => dispatch(addDishes(dishes)))
}




