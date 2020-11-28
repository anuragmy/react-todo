/* eslint-disable no-undef */
import React from 'react';
import { hot } from 'react-hot-loader';
import TodoList from './components/Todos/TodoList';
import './App.css';


const App = () => (
  <>
    <TodoList />
  </>
)

export default hot(module)(App);
