
import { ADD_TODO, REMOVE_TODO, MARK_COMPLETE, LOAD_SUCCESS, LOAD_FAILURE, LOAD_INIT } from './action';

const initialState = {
  data: [],
  isLoading: false,
}


export const isLoading = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case LOAD_INIT: return {
      ...state,
      isLoading: true,
    }
    case LOAD_SUCCESS:
    case LOAD_FAILURE: return {
      ...state,
      isLoading: false,
    };
    default: return state;
  }
}


export const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO: {
      return {
        ...state,
        data: state.data.concat(payload),

      }
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return {
        ...state,
        data: state.data.filter((todo) => todo.text !== text),
      }
    }
    case MARK_COMPLETE: {
      const { text } = payload;
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.text === text) {
            return { ...todo, isCompleted: true }
          }
          else return todo;
        })
      }
    }
    case LOAD_SUCCESS: {
      return {
        ...state,
        data: action.payload
      }
    }
    case LOAD_FAILURE:
    case LOAD_INIT:
    default: return {
      ...state,
      isLoading: false,
    };
  }
}