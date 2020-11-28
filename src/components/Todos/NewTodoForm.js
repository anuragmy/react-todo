/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { useDispatch } from 'redux';
import { addTodo } from '../../action';

import './NewTodoForm.css';

const NewTodoForm = ({ todos = [], add }) => {
  const [value, setValue] = useState('');

  const isDuplicate = () => todos.some(todo => todo.text === value);


  const handleChange = e => e.target.value ? setValue(e.target.value) : '';

  const handleSubmit = e => {
    e.preventDefault();
    console.log('clicked', value);
    if (!value) return;
    if (isDuplicate()) return;
    if (!isDuplicate()) {
      add(value);
      setValue('');
    }
  }

  return (
    <div className="new-todo-form">
      <form onSubmit={handleChange}>
        <input type="text" placeholder="Type your todo here" className="new-todo-input" value={value} onChange={handleChange} />
        <button className="new-todo-button" onClick={handleSubmit}>Create Todo</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  add: text => dispatch(addTodo(text))
});

const mapStateToProps = state => ({
  todos: state.todos,
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
