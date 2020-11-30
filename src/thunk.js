import { loadFailure, loadInit, loadSuccess, addTodo, removeTodo, markComplete } from './action';
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

export const deleteTodos = text => async dispatch => {
  await axios.delete(`http://localhost:8080/todos/${text.id}`)
    .then(res => {
      dispatch(removeTodo(res.data));
    })
    .catch((err) => console.log(err));
}

export const completeTodos = data => async dispatch => {
  await axios.post(`http://localhost:8080/todos/${data.id}/completed`)
    .then(res => {
      dispatch(markComplete(res.data));
    })
    .catch((err) => console.log(err));
}

