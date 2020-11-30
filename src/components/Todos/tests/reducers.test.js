/* eslint-disable no-undef */
import { expect } from 'chai';
import { todos } from '../../../reducer';
import { ADD_TODO } from '../../../action';

describe('todos reducers', () => {
  it('should add todo', () => {
    const fakeTodo = { text: 'text', isCompleted: false, createdAt: '23.03.0303', id: 1 };
    const fakeAction = {
      type: ADD_TODO,
      payload: fakeTodo,
    }
    const originalState = {
      data: [],
      isLoading: false,
    }
    const expectedState = {
      data: [fakeTodo],
      isLoading: false,
    }
    const todo = todos(originalState, fakeAction);
    expect(todo).to.deep.equal(expectedState);
  })
});

