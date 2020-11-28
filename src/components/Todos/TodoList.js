/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import { loadTodos } from '../../thunk';
import { removeTodo, markComplete } from '../../action';

const TooList = ({ todos = [], onRemovePressed, markAsCompleted, isLoading, startLoading }) => {

  useEffect(() => startLoading(), []);

  const loading = <div>Loading....</div>;

  return isLoading ? loading : (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo, i) => (
        <TodoListItem key={i.toString()} todo={todo} onRemovePressed={onRemovePressed} markAsCompleted={markAsCompleted} />
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos,
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  markAsCompleted: (text) => dispatch(markComplete(text)),
  startLoading: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TooList);
