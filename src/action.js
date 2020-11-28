
// types

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const MARK_COMPLETE = 'MARK_COMPLETE';
export const LOAD_INIT = 'LOAD_INIT';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILURE = 'LOAD_FAILURE';

// actions 

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text }
});

export const markComplete = (text) => ({
  type: MARK_COMPLETE,
  payload: { text },
});


export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text }
});

export const loadInit = () => ({
  type: LOAD_INIT
});

export const loadFailure = () => ({
  type: LOAD_FAILURE
});

export const loadSuccess = (data) => ({
  type: LOAD_SUCCESS,
  payload: data
});