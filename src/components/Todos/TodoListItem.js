/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import './TodoListItem.css';

const TodoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

const ButtonContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`;

const CompletedButton = styled(Button)`
  display: inline-block;
  background-color: #22ee22;
`;

const RemoveButton = styled(Button)`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #ee2222;
  margin-left: 8px;
`;

const TodoItemContainerWithBorder = styled(TodoItemContainer)`
border-bottom: ${({ createdAt }) => new Date(createdAt) > new Date(Date.now() * 864000 * 3) ? 'none' : '2px solid red'};
`;

const TodoListItem = ({ todo, onRemovePressed, markAsCompleted }) => {

  const date = new Date(todo.createdAt).toLocaleDateString();
  const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWithBorder;

  return (
    <Container createdAt={date}>
      <h3>{todo.text}</h3>
      <p>Create At: {date}</p>
      <ButtonContainer>
        {!todo.isCompleted && (
          <CompletedButton data-cy={`mark-complete-${todo.text.replaceAll(' ', '-')}`} onClick={() => markAsCompleted(todo)}>Mark as completed</CompletedButton>
        )}
        <RemoveButton className="remove-button" data-cy={`remove-${todo.text.replaceAll(' ', '-')}`} onClick={() => {
          onRemovePressed(todo);
        }}>remove</RemoveButton>
      </ButtonContainer>
    </Container>
  )
}

const mapStateToProps = state => ({
  todos: state.todos,
});


export default connect(mapStateToProps)(TodoListItem);

