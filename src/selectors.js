import { createSelector } from 'reselect';

export const getTodos = ({ todos }) => todos.data;
export const getLoading = ({ todos }) => todos.isLoading;
// export const getCompleteTodos = ({ todos }) => todos.data.filter((todo => todo.isCompleted));
// export const getIncompleteTodos = ({ todos }) => todos.data.filter((todo => !todo.isCompleted));
export const getIncompleteTodos = createSelector(
  getTodos,
  (todos) => todos.filter((todo => !todo.isCompleted)
  )
);

export const getCompleteTodos = createSelector(
  getTodos,
  (todos) => todos.filter((todo => todo.isCompleted)
  )
);