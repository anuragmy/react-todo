import { ADD_TODO, REMOVE_TODO, MARK_COMPLETE, LOAD_SUCCESS, LOAD_FAILURE, LOAD_INIT } from './action';

export const isLoading = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case LOAD_INIT: return true;
    case LOAD_SUCCESS:
    case LOAD_FAILURE: return false;
    default: return state;
  }
}

export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    case MARK_COMPLETE: {
      const { text } = payload;
      return state.map((todo) => {
        if (todo.text === text) {
          return { ...todo, isCompleted: true }
        }
        else return todo;
      });
    }
    case LOAD_SUCCESS: {
      return action.payload;
    }
    case LOAD_FAILURE:
    case LOAD_INIT:
    default: return state;
  }
}