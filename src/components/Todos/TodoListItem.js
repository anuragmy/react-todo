/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import './TodoListItem.css';


const TodoListItem = ({ todo, onRemovePressed, markAsCompleted }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        {!todo.isCompleted && (
          <button className="completed-button" onClick={() => markAsCompleted(todo.text)}>Mark as completed</button>
        )}
        <button className="remove-button" onClick={() => onRemovePressed(todo.text)}>remove</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos,
});


export default connect(mapStateToProps)(TodoListItem);

