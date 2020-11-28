import { loadFailure, loadInit, loadSuccess } from './action';
import axios from 'axios';

export const loadTodos = () => async (dispatch, getState) => {
  dispatch(loadInit());
  axios.get('http://localhost:8080/todos')
    .then(res => dispatch(loadSuccess(res.data)))
    .catch(() => dispatch(loadFailure()));
}