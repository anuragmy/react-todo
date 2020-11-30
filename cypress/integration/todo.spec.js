/* eslint-disable no-undef */
import { expect } from 'chai';
describe('ToDo App', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy="form"]')
      .as('form');
    cy.get('[data-cy="submit"]')
      .as('submit');
  });


  it('should display heading ', () => {
    cy.get('h2')
      .invoke('text')
      .should('equal', 'ToDo App');
  });
  it('should display heading with .then', () => {

    cy.get('h2')
      .then($h2 => {
        expect($h2.text()).to.equal('ToDo App')
      });
  });
  it('should the add text in input field', () => {

    cy.get('input')
      .type('hello');
  });
  it('should the add text in input field with data-cy', () => {

    cy.get('[data-cy="form"]')
      .type('hello hi');
  });
  it('should the add text in input field with alias', () => {

    cy.get('@form')
      .type('ji')

  });
  it('Enter text and create the todo task 1', () => {
    cy.get('@form')
      .type('task 1')
    cy.get('@submit')
      .click()
  });
  it('Enter text and create the todo task 2', () => {
    cy.get('@form')
      .type('task 2')
    cy.get('@submit')
      .click()
  });
  it('Enter text and create the todo task 3', () => {
    cy.get('@form')
      .type('task 3')
    cy.get('@submit')
      .click()
  });
  it('should mark task 2 as complete', () => {
    cy.get('@form')
      .type('task 2')
    cy.get('[data-cy="mark-complete-task-2"]')
      .click()
  });
  it('should remove task 2', () => {
    cy.get('@form')
      .type('task 2')
    cy.get('[data-cy="remove-task-2"]')
      .click()
  });
  it('clean up task 1 created', () => {
    cy.get('@form')
      .type('task 1')
    cy.get('[data-cy="remove-task-1"]')
      .click()
  });
  it('clean up task 3 created', () => {
    cy.get('@form')
      .type('task 3')
    cy.get('[data-cy="remove-task-3"]')
      .click()
  });
})





