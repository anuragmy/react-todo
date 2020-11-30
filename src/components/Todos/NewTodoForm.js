/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import { useDispatch } from 'redux';
import { addTodos } from '../../thunk';
import { getTodos } from '../../selectors';

// import './NewTodoForm.css';

const TodoForm = styled.div`
border-radius: 8px;
padding: 16px;
margin-top: 20px;
margin-bottom: 20px;
text-align: center;
box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
font-size: 16px;
padding: 8px;
border: none;
border-bottom: 2px solid #ddd;
border-radius: 8px;
width: 70%;
outline: none;
`;

const NewTodoButton = styled.button`
font-size: 16px;
padding: 8px;
border: none;
border-radius: 8px;
outline: none;
cursor: pointer;
margin-left: 8px;
width: 20%;
background-color: #22ee22;
`;

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
    <TodoForm data-cy="form">
      <form onSubmit={handleChange}>
        <NewTodoInput type="text" placeholder="Type your todo here" value={value} onChange={handleChange} />
        <NewTodoButton onClick={handleSubmit} data-cy="submit">Create Todo</NewTodoButton>
      </form>
    </TodoForm>
  )
}

const mapDispatchToProps = dispatch => ({
  add: text => dispatch(addTodos(text))
});

const mapStateToProps = state => ({
  todos: getTodos(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
