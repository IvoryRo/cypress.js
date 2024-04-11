describe('Registration Test', () => {
  it('Successfully registers a new user', () => {
    cy.visit('https://login.qa.studio/register');

    // Заполнить форму регситрации
    cy.get('#email').type('WRONG_USER_LOGIN');
    cy.get('#password').type('WRONG_USER_PASSWORD');

    // Получить подтверждение
    cy.get('button[type="Submit"]').click();

    // получить подтверждение
    cy.contains('Такого логина или пароля нет').should('be.visible');
  });
});