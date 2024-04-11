/// <reference types="cypress" />

describe('Registration Test', () => {
  it('Successfully stops registration without @', () => {
    cy.visit('https://login.qa.studio/register');

    // Заполнить форму регситрации
    cy.get('#email').type('USER_LOGIN_NO@');
    cy.get('#password').type('USER_PASSWORD');

    // Получить подтверждение
    cy.get('button[type="Войти"]').click();

    // получить подтверждение
    cy.contains('Нужно исправить проблему валидации').should('be.visible');
  });
});