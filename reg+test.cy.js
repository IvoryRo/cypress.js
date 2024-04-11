/// <reference types="cypress" />

describe('Registration Test', () => {
  it('Successfully registers a new user', () => {
    cy.visit('https://login.qa.studio/register');

    // Заполнить форму регситрации
    cy.get('#email').type('USER_LOGIN');
    cy.get('#password').type('USER_PASSWORD');

    // Получить подтверждение
    cy.get('button[type="Submit"]').click();

    // получить подтверждение
    cy.contains('Регистрация успешна').should('be.visible');
  });
});