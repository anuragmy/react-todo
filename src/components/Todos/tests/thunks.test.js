/* eslint-disable no-undef */
import sinon from 'sinon';
import 'node-fetch';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';
import { loadTodos } from '../../../thunk';

describe('think reducer test', () => {

  afterEach(() => fetchMock.reset());

  it('dispatches the correct action', async () => {
    const fakeDispatch = sinon.spy();

    const fakeTodo = { text: 'test', isComplete: false, createdAt: 2324234, id: 'sdasdasdafa' };
    fetchMock.get('http://localhost:8080/todos', fakeTodo);

    const expectedFirstAction = {
      type: 'LOAD_INIT',
    }

    // const expectedSecondAction = {
    //   type: 'LOAD_SUCCESS',
    //   payload: [fakeTodo],
    // }

    await loadTodos()(fakeDispatch);

    expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
    // expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);
  });
})
