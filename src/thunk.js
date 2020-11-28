import { loadFailure, loadInit, loadSuccess, addTodo } from './action';
import axios from 'axios';

// export const displayError = () = () => alert('Error');

export const loadTodos = () => async dispatch => {
  dispatch(loadInit());
  await axios.get('http://localhost:8080/todos')
    .then(res => dispatch(loadSuccess(res.data)))
    .catch(() => dispatch(loadFailure()));
}

export const addTodos = text => async dispatch => {
  await axios.post('http://localhost:8080/todos', { text })
    .then(res => {
      dispatch(addTodo(res.data.text));
    })
    .catch((err) => console.log(err));
}

