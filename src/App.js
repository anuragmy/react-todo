/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import TodoList from './components/Todos/TodoList';
// import 'tachyons';
// import './App.css';

const AppStyled = styled.div`
margin: 1rem;
font-family: Arial, Helvetica, sans-serif;
color: #222222;
width: 100vw;
height: 100vh;
overflow-x: hidden;
`;

const App = () => (
  <AppStyled>
    <h2 style={{ textAlign: 'center' }}>ToDo App</h2>
    <TodoList />
  </AppStyled>
)

export default hot(module)(App);
