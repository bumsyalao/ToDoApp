import axios from 'axios';
import { BASE_URL } from '../config';
import { GET_TODOS, CREATE_TODO, UPDATE_TODO, GET_TODO, DELETE_TODO } from './types';

export const getTodos = () => {
  return (dispatch => {
    return axios.get(`${BASE_URL}/api/todolists`).then((response) => {
      dispatch(getTodosSuccess(response.data.data));
    })
  });
};

const getTodosSuccess = (todolists) => {
  return { type: GET_TODOS, todolists };
};
const newTodoSuccess = (newTodo) => {
  return { type: CREATE_TODO, newTodo }
};

export const newTodo = name => {
  return ((dispatch) => {
    return axios.post(`${BASE_URL}/api/todolists`, {name}).then((res) => {
      dispatch(newTodoSuccess(res.data.data));
    })
  });
};
