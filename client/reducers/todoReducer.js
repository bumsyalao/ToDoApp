import initialState from './initialState';
import { GET_TODOS, CREATE_TODO, UPDATE_TODO, GET_TODO, DELETE_TODO } from '../actions/types';

const todoReducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case GET_TODOS:
      return [
        ...state,
        ...action.todolists
      ];

    case CREATE_TODO:
      return [
        ...state,
        action.newTodo
      ];

    default:
      return state;
  }
};

export default todoReducer;
