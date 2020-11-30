/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { getTodos, getLoading, getCompleteTodos, getIncompleteTodos } from '../../selectors';
import { loadTodos, deleteTodos, completeTodos } from '../../thunk';

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
  `;

const TooList = ({
  onRemovePressed,
  markAsCompleted,
  isLoading,
  startLoading,
  completeTodos = [],
  incompleteTodos = [],
}) => {

  useEffect(() => startLoading(), []);

  const loading = <div>Loading....</div>;

  return isLoading ? loading : (
    <ListWrapper>
      <NewTodoForm />
      {incompleteTodos.length > 0 && <h3>Incomplete</h3>}
      {incompleteTodos.map((todo, i) => (
        <TodoListItem key={i.toString()} todo={todo} onRemovePressed={onRemovePressed} markAsCompleted={markAsCompleted} />
      ))}
      {completeTodos.length > 0 && <h3>Complete</h3>}
      {completeTodos.map((todo, i) => (
        <TodoListItem key={i.toString()} todo={todo} onRemovePressed={onRemovePressed} />
      ))}
    </ListWrapper>
  )
}

const mapStateToProps = state => ({
  todos: getTodos(state),
  completeTodos: getCompleteTodos(state),
  incompleteTodos: getIncompleteTodos(state),
  isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: (text) => dispatch(deleteTodos(text)),
  markAsCompleted: (text) => dispatch(completeTodos(text)),
  startLoading: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TooList);
